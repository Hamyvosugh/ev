'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Upload, X, FileText, Image, AlertCircle, CheckCircle } from 'lucide-react';
import { SupportedLanguage } from '@/types/WebsiteRequestForm';

interface FileUploadFieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  language?: SupportedLanguage;
  onChange?: (files: File[]) => void;
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
  accept?: string;
  maxSize?: number; // in MB
  maxFiles?: number;
  showPreview?: boolean;
  uploadType?: 'image' | 'document' | 'any';
}

interface FileWithPreview extends File {
  preview?: string;
  id: string;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  label,
  name,
  error,
  required = false,
  helperText,
  language = 'en',
  onChange,
  className = '',
  disabled = false,
  multiple = false,
  accept,
  maxSize = 5, // 5MB default
  maxFiles = 5,
  showPreview = true,
  uploadType = 'any',
}) => {
  const isRTL = language === 'fa';
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadErrors, setUploadErrors] = useState<{ [key: string]: string }>({});

  // Get accept attribute based on upload type
  const getAcceptAttribute = () => {
    if (accept) return accept;
    
    switch (uploadType) {
      case 'image':
        return 'image/*';
      case 'document':
        return '.pdf,.doc,.docx,.txt,.rtf';
      default:
        return '*/*';
    }
  };

  // Validate file
  const validateFile = (file: File): string | null => {
    // Size validation
    if (file.size > maxSize * 1024 * 1024) {
      return `File size exceeds ${maxSize}MB limit`;
    }

    // Type validation
    const acceptAttribute = getAcceptAttribute();
    if (acceptAttribute !== '*/*') {
      const acceptedTypes = acceptAttribute.split(',').map(type => type.trim());
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      const fileMimeType = file.type;

      const isAccepted = acceptedTypes.some(type => {
        if (type.startsWith('.')) {
          return fileExtension === type;
        }
        if (type.includes('/*')) {
          return fileMimeType.startsWith(type.replace('/*', ''));
        }
        return fileMimeType === type;
      });

      if (!isAccepted) {
        return 'File type not supported';
      }
    }

    return null;
  };

  // Create file preview
  const createFilePreview = (file: File): Promise<FileWithPreview> => {
    return new Promise((resolve) => {
      const fileWithPreview: FileWithPreview = {
        ...file,
        id: Math.random().toString(36).substr(2, 9),
      };

      if (file.type.startsWith('image/') && showPreview) {
        const reader = new FileReader();
        reader.onload = (e) => {
          fileWithPreview.preview = e.target?.result as string;
          resolve(fileWithPreview);
        };
        reader.readAsDataURL(file);
      } else {
        resolve(fileWithPreview);
      }
    });
  };

  // Handle file selection
  const handleFiles = useCallback(async (selectedFiles: FileList | null) => {
    if (!selectedFiles || disabled) return;

    const fileArray = Array.from(selectedFiles);
    const newErrors: { [key: string]: string } = {};

    // Validate file count
    if (!multiple && fileArray.length > 1) {
      setUploadErrors({ general: 'Only one file allowed' });
      return;
    }

    if (files.length + fileArray.length > maxFiles) {
      setUploadErrors({ general: `Maximum ${maxFiles} files allowed` });
      return;
    }

    // Process each file
    const processedFiles: FileWithPreview[] = [];
    
    for (const file of fileArray) {
      const validationError = validateFile(file);
      if (validationError) {
        newErrors[file.name] = validationError;
        continue;
      }

      try {
        const fileWithPreview = await createFilePreview(file);
        processedFiles.push(fileWithPreview);
      } catch (error) {
        newErrors[file.name] = 'Failed to process file';
      }
    }

    // Update state
    setUploadErrors(newErrors);
    
    const updatedFiles = multiple ? [...files, ...processedFiles] : processedFiles;
    setFiles(updatedFiles);
    
    if (onChange) {
      onChange(updatedFiles);
    }

    // Clear input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [files, multiple, maxFiles, maxSize, onChange, disabled]);

  // Remove file
  const removeFile = (fileId: string) => {
    const updatedFiles = files.filter(file => file.id !== fileId);
    setFiles(updatedFiles);
    
    if (onChange) {
      onChange(updatedFiles);
    }

    // Clear specific file error
    const updatedErrors = { ...uploadErrors };
    const fileToRemove = files.find(f => f.id === fileId);
    if (fileToRemove && updatedErrors[fileToRemove.name]) {
      delete updatedErrors[fileToRemove.name];
      setUploadErrors(updatedErrors);
    }
  };

  // Drag and drop handlers
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get file icon
  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <Image className="w-5 h-5" />;
    }
    return <FileText className="w-5 h-5" />;
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label */}
      <label
        className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
          error 
            ? 'text-red-600' 
            : 'text-gray-700'
        } ${isRTL ? 'text-right' : 'text-left'}`}
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1">*</span>
        )}
      </label>

      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg transition-all duration-200 cursor-pointer
          ${dragActive 
            ? 'border-blue-400 bg-blue-50' 
            : error 
              ? 'border-red-300 bg-red-50 hover:border-red-400'
              : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
          }
          ${disabled ? 'cursor-not-allowed opacity-60 bg-gray-100' : ''}
        `}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          name={name}
          accept={getAcceptAttribute()}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          disabled={disabled}
          className="sr-only"
        />

        <div className="p-6 text-center">
          <Upload className={`mx-auto h-12 w-12 ${dragActive ? 'text-blue-500' : 'text-gray-400'}`} />
          <div className="mt-4">
            <p className={`text-sm font-medium ${dragActive ? 'text-blue-600' : 'text-gray-900'}`}>
              {dragActive ? 'Drop files here' : 'Click to upload or drag and drop'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {uploadType === 'image' ? 'Images only' : uploadType === 'document' ? 'Documents only' : 'Any file type'}
              {' • '}Max {maxSize}MB
              {multiple && ` • Up to ${maxFiles} files`}
            </p>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file) => (
            <div
              key={file.id}
              className={`flex items-center p-3 bg-white border rounded-lg ${
                uploadErrors[file.name] ? 'border-red-200 bg-red-50' : 'border-gray-200'
              } ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* File Preview */}
              <div className="flex-shrink-0">
                {file.preview ? (
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                    {getFileIcon(file)}
                  </div>
                )}
              </div>

              {/* File Info */}
              <div className={`flex-1 min-w-0 ${isRTL ? 'mr-3' : 'ml-3'}`}>
                <p className="text-sm font-medium text-gray-900 truncate">
                  {file.name}
                </p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(file.size)}
                </p>
                {uploadErrors[file.name] && (
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {uploadErrors[file.name]}
                  </p>
                )}
              </div>

              {/* Status Icon */}
              <div className={`flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}>
                {uploadErrors[file.name] ? (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(file.id);
                }}
                disabled={disabled}
                className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors duration-200 disabled:opacity-50"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Helper Text and Errors */}
      <div className={`mt-2 min-h-[1.25rem] ${isRTL ? 'text-right' : 'text-left'}`}>
        {error || uploadErrors.general ? (
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
            {error || uploadErrors.general}
          </p>
        ) : helperText ? (
          <p className="text-sm text-gray-500">{helperText}</p>
        ) : null}
      </div>
    </div>
  );
};

export default FileUploadField;