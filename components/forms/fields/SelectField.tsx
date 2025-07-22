'use client';

import React, { forwardRef, SelectHTMLAttributes, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SupportedLanguage, SelectOption } from '@/types/WebsiteRequestForm';

interface SelectFieldProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label: string;
  options: SelectOption[];
  error?: string;
  required?: boolean;
  helperText?: string;
  language?: SupportedLanguage;
  placeholder?: string;
  searchable?: boolean;
  onChange?: (value: string) => void;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      options,
      error,
      required = false,
      helperText,
      language = 'en',
      placeholder,
      searchable = false,
      onChange,
      className = '',
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const isRTL = language === 'fa';
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredOptions = searchable
      ? options.filter(option => 
          option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          option.value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;

    const selectedOption = options.find(option => option.value === value);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value;
      if (onChange) {
        onChange(newValue);
      }
    };

    const handleCustomSelect = (optionValue: string) => {
      if (onChange) {
        onChange(optionValue);
      }
      setIsOpen(false);
      setSearchTerm('');
    };

    if (searchable) {
      // Custom searchable select
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

          {/* Custom Select Container */}
          <div className="relative">
            <button
              type="button"
              onClick={() => !disabled && setIsOpen(!isOpen)}
              disabled={disabled}
              className={`
                w-full px-4 py-3 border rounded-lg transition-all duration-200 text-left
                ${error 
                  ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 bg-white hover:border-gray-400 focus:border-blue-900 focus:ring-blue-100'
                }
                ${disabled 
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                  : 'focus:outline-none focus:ring-2 cursor-pointer'
                }
                ${isRTL ? 'text-right' : 'text-left'}
                flex items-center justify-between
              `}
            >
              <span className={selectedOption ? 'text-gray-900' : 'text-gray-400'}>
                {selectedOption ? selectedOption.label : placeholder || 'انتخاب کنید'}
              </span>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </button>

            {/* Dropdown */}
            {isOpen && !disabled && (
              <div className={`
                absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg
                max-h-60 overflow-hidden
                ${isRTL ? 'right-0' : 'left-0'}
              `}>
                {/* Search Input */}
                <div className="p-2 border-b border-gray-100">
                  <input
                    type="text"
                    placeholder="جستجو..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className={`
                      w-full px-3 py-2 border border-gray-200 rounded text-sm
                      focus:outline-none focus:border-blue-500
                      ${isRTL ? 'text-right' : 'text-left'}
                    `}
                  />
                </div>

                {/* Options */}
                <div className="max-h-48 overflow-y-auto">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleCustomSelect(option.value)}
                        className={`
                          w-full px-4 py-3 text-sm hover:bg-blue-50 transition-colors duration-150
                          ${value === option.value ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}
                          ${isRTL ? 'text-right' : 'text-left'}
                        `}
                      >
                        {option.label}
                      </button>
                    ))
                  ) : (
                    <div className={`px-4 py-3 text-sm text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>
                      موردی یافت نشد
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Backdrop */}
            {isOpen && (
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsOpen(false)}
              />
            )}
          </div>

          {/* Helper Text and Error */}
          <div className={`mt-2 min-h-[1.25rem] ${isRTL ? 'text-right' : 'text-left'}`}>
            {error ? (
              <p className="text-sm text-red-600 flex items-center">
                <svg 
                  className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                    clipRule="evenodd" 
                  />
                </svg>
                {error}
              </p>
            ) : helperText ? (
              <p className="text-sm text-gray-500">{helperText}</p>
            ) : null}
          </div>
        </div>
      );
    }

    // Standard native select
    return (
      <div className={`w-full ${className}`}>
        {/* Label */}
        <label
          htmlFor={props.id || props.name}
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

        {/* Select Container */}
        <div className="relative group">
          <select
            ref={ref}
            value={value}
            onChange={handleSelectChange}
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`
              w-full px-4 py-3 border rounded-lg transition-all duration-200 appearance-none
              ${error 
                ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200' 
                : 'border-gray-300 bg-white hover:border-gray-400 focus:border-blue-900 focus:ring-blue-100'
              }
              ${disabled 
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                : 'focus:outline-none focus:ring-2 cursor-pointer'
              }
              ${isRTL ? 'text-right' : 'text-left'}
              text-gray-900
            `}
            disabled={disabled}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Arrow Icon */}
          <div className={`absolute top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 ${
            isRTL ? 'left-3' : 'right-3'
          }`}>
            <ChevronDown className="w-5 h-5" />
          </div>

          {/* Focus Ring Enhancement */}
          <div className={`
            absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-200
            ${error ? 'ring-2 ring-red-200 opacity-0 group-focus-within:opacity-100' : ''}
            ${!error ? 'ring-2 ring-blue-100 opacity-0 group-focus-within:opacity-100' : ''}
          `} />
        </div>

        {/* Helper Text and Error */}
        <div className={`mt-2 min-h-[1.25rem] ${isRTL ? 'text-right' : 'text-left'}`}>
          {error ? (
            <p className="text-sm text-red-600 flex items-center">
              <svg 
                className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                  clipRule="evenodd" 
                />
              </svg>
              {error}
            </p>
          ) : helperText ? (
            <p className="text-sm text-gray-500">{helperText}</p>
          ) : null}
        </div>
      </div>
    );
  }
);

SelectField.displayName = 'SelectField';

export default SelectField;