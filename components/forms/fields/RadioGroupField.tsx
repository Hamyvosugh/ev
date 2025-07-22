'use client';

import React from 'react';
import { SupportedLanguage, SelectOption } from '@/types/WebsiteRequestForm';

interface RadioGroupFieldProps {
  label: string;
  name: string;
  options: SelectOption[];
  value?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  language?: SupportedLanguage;
  layout?: 'vertical' | 'horizontal' | 'grid';
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const RadioGroupField: React.FC<RadioGroupFieldProps> = ({
  label,
  name,
  options,
  value,
  error,
  required = false,
  helperText,
  language = 'en',
  layout = 'vertical',
  onChange,
  className = '',
  disabled = false,
}) => {
  const isRTL = language === 'fa';

  const handleChange = (optionValue: string) => {
    if (!disabled && onChange) {
      onChange(optionValue);
    }
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-wrap gap-6';
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 gap-4';
      default:
        return 'space-y-3';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label */}
      <fieldset>
        <legend
          className={`block text-sm font-medium mb-4 transition-colors duration-200 ${
            error 
              ? 'text-red-600' 
              : 'text-gray-700'
          } ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </legend>

        {/* Radio Options */}
        <div className={getLayoutClasses()}>
          {options.map((option, index) => {
            const isSelected = value === option.value;
            const inputId = `${name}-${option.value}-${index}`;

            return (
              <label
                key={option.value}
                htmlFor={inputId}
                className={`
                  relative flex items-center cursor-pointer group transition-all duration-200
                  ${disabled ? 'cursor-not-allowed opacity-60' : ''}
                  ${isRTL ? 'flex-row-reverse' : 'flex-row'}
                  ${layout === 'horizontal' ? 'flex-shrink-0' : ''}
                `}
              >
                {/* Custom Radio Button */}
                <div className="relative">
                  {/* Hidden native input */}
                  <input
                    type="radio"
                    id={inputId}
                    name={name}
                    value={option.value}
                    checked={isSelected}
                    onChange={() => handleChange(option.value)}
                    disabled={disabled}
                    className="sr-only"
                  />

                  {/* Custom radio visual */}
                  <div
                    className={`
                      w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                      ${isSelected 
                        ? error
                          ? 'border-red-500 bg-red-50'
                          : 'border-blue-900 bg-blue-50'
                        : error
                          ? 'border-red-300 bg-white group-hover:border-red-400'
                          : 'border-gray-300 bg-white group-hover:border-blue-400'
                      }
                      ${disabled 
                        ? 'border-gray-200 bg-gray-100' 
                        : 'group-focus-within:ring-2 group-focus-within:ring-blue-100'
                      }
                    `}
                  >
                    {/* Inner dot */}
                    <div
                      className={`
                        w-2.5 h-2.5 rounded-full transition-all duration-200
                        ${isSelected 
                          ? error
                            ? 'bg-red-500 scale-100'
                            : 'bg-blue-900 scale-100'
                          : 'bg-transparent scale-0'
                        }
                      `}
                    />
                  </div>

                  {/* Focus ring */}
                  <div
                    className={`
                      absolute inset-0 rounded-full transition-opacity duration-200 pointer-events-none
                      ${error ? 'ring-2 ring-red-200' : 'ring-2 ring-blue-200'}
                      opacity-0 group-focus-within:opacity-100
                    `}
                  />
                </div>

                {/* Label Text */}
                <span
                  className={`
                    text-sm font-medium transition-colors duration-200 select-none
                    ${isSelected 
                      ? error
                        ? 'text-red-700'
                        : 'text-blue-900'
                      : 'text-gray-700 group-hover:text-gray-900'
                    }
                    ${disabled ? 'text-gray-400' : ''}
                    ${isRTL ? 'mr-3' : 'ml-3'}
                  `}
                >
                  {option.label}
                </span>

                {/* Hover background */}
                <div
                  className={`
                    absolute inset-0 rounded-lg transition-all duration-200 pointer-events-none
                    ${!disabled ? 'group-hover:bg-gray-50 group-hover:scale-105' : ''}
                    ${isSelected && !error ? 'bg-blue-50' : ''}
                    ${isSelected && error ? 'bg-red-50' : ''}
                    opacity-0 group-hover:opacity-100
                    ${isSelected ? 'opacity-30' : ''}
                  `}
                />
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Helper Text and Error */}
      <div className={`mt-3 min-h-[1.25rem] ${isRTL ? 'text-right' : 'text-left'}`}>
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
          <p className="text-sm text-gray-500 flex items-start">
            <svg 
              className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'} flex-shrink-0 mt-0.5 text-blue-500`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span>{helperText}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default RadioGroupField;