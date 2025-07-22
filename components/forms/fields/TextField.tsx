'use client';

import React, { forwardRef, InputHTMLAttributes } from 'react';
import { SupportedLanguage } from '@/types/WebsiteRequestForm';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel' | 'url' | 'password';
  helperText?: string;
  language?: SupportedLanguage;
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      required = false,
      type = 'text',
      helperText,
      language = 'en',
      icon,
      suffix,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const isRTL = language === 'fa';
    
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

        {/* Input Container */}
        <div className="relative group">
          {/* Icon */}
          {icon && (
            <div className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-gray-400 group-focus-within:text-blue-900 transition-colors duration-200 ${
              isRTL ? 'right-3' : 'left-3'
            }`}>
              {icon}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            type={type}
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`
              w-full px-4 py-3 border rounded-lg transition-all duration-200
              ${icon ? (isRTL ? 'pr-10' : 'pl-10') : ''}
              ${suffix ? (isRTL ? 'pl-10' : 'pr-10') : ''}
              ${error 
                ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200' 
                : 'border-gray-300 bg-white hover:border-gray-400 focus:border-blue-900 focus:ring-blue-100'
              }
              ${disabled 
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                : 'focus:outline-none focus:ring-2'
              }
              ${isRTL ? 'text-right' : 'text-left'}
              placeholder:text-gray-400 text-gray-900
            `}
            disabled={disabled}
            {...props}
          />

          {/* Suffix */}
          {suffix && (
            <div className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-gray-400 ${
              isRTL ? 'left-3' : 'right-3'
            }`}>
              {suffix}
            </div>
          )}

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

TextField.displayName = 'TextField';

export default TextField;