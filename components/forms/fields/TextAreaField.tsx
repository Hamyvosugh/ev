'use client';

import React, { forwardRef, TextareaHTMLAttributes, useState } from 'react';
import { SupportedLanguage } from '@/types/WebsiteRequestForm';

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  language?: SupportedLanguage;
  showCharCount?: boolean;
  maxLength?: number;
  minRows?: number;
  autoResize?: boolean;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  (
    {
      label,
      error,
      required = false,
      helperText,
      language = 'en',
      showCharCount = false,
      maxLength,
      minRows = 4,
      autoResize = false,
      className = '',
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const isRTL = language === 'fa';
    const [charCount, setCharCount] = useState(
      typeof value === 'string' ? value.length : 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setCharCount(newValue.length);
      
      if (autoResize) {
        // Auto-resize functionality
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
      
      if (onChange) {
        onChange(e);
      }
    };

    const getCharCountColor = () => {
      if (!maxLength) return 'text-gray-500';
      const percentage = (charCount / maxLength) * 100;
      if (percentage >= 95) return 'text-red-600';
      if (percentage >= 80) return 'text-amber-600';
      return 'text-gray-500';
    };

    return (
      <div className={`w-full ${className}`}>
        {/* Label */}
        <label
          htmlFor={props.id || props.name}
          className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
            error 
              ? 'text-red-600' 
              : 'text-gray-700 group-focus-within:text-blue-900'
          } ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>

        {/* TextArea Container */}
        <div className="relative group">
          <textarea
            ref={ref}
            dir={isRTL ? 'rtl' : 'ltr'}
            rows={minRows}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-vertical
              ${error 
                ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200' 
                : 'border-gray-300 bg-white hover:border-gray-400 focus:border-blue-900 focus:ring-blue-100'
              }
              ${disabled 
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed resize-none' 
                : 'focus:outline-none focus:ring-2'
              }
              ${isRTL ? 'text-right' : 'text-left'}
              ${autoResize ? 'resize-none overflow-hidden' : ''}
              placeholder:text-gray-400 text-gray-900
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
            `}
            disabled={disabled}
            style={{
              minHeight: autoResize ? `${minRows * 1.5}rem` : undefined,
            }}
            {...props}
          />

          {/* Focus Ring Enhancement */}
          <div className={`
            absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-200
            ${error ? 'ring-2 ring-red-200 opacity-0 group-focus-within:opacity-100' : ''}
            ${!error ? 'ring-2 ring-blue-100 opacity-0 group-focus-within:opacity-100' : ''}
          `} />
        </div>

        {/* Footer: Helper Text, Error, and Character Count */}
        <div className={`mt-2 flex justify-between items-start ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* Left side: Error or Helper Text */}
          <div className="flex-1">
            {error ? (
              <p className="text-sm text-red-600 flex items-center">
                <svg 
                  className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'} flex-shrink-0`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span>{error}</span>
              </p>
            ) : helperText ? (
              <p className="text-sm text-gray-500">{helperText}</p>
            ) : null}
          </div>

          {/* Right side: Character Count */}
          {showCharCount && (
            <div className={`text-xs ${getCharCountColor()} ${isRTL ? 'mr-2' : 'ml-2'} flex-shrink-0`}>
              {maxLength ? (
                <span>
                  {charCount} / {maxLength}
                </span>
              ) : (
                <span>{charCount}</span>
              )}
            </div>
          )}
        </div>

        {/* Progress bar for character limit */}
        {showCharCount && maxLength && (
          <div className="mt-1">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  charCount >= maxLength 
                    ? 'bg-red-500' 
                    : charCount >= maxLength * 0.8 
                    ? 'bg-amber-500' 
                    : 'bg-blue-500'
                }`}
                style={{
                  width: `${Math.min((charCount / maxLength) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;