'use client';

import React from 'react';
import { Check, Minus } from 'lucide-react';
import { SupportedLanguage } from '@/types/WebsiteRequestForm';

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked?: boolean;
  error?: string;
  required?: boolean;
  helperText?: string;
  language?: SupportedLanguage;
  onChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  name,
  checked = false,
  error,
  required = false,
  helperText,
  language = 'en',
  onChange,
  className = '',
  disabled = false,
  indeterminate = false,
  size = 'md',
}) => {
  const isRTL = language === 'fa';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          checkbox: 'w-4 h-4',
          icon: 'w-3 h-3',
          text: 'text-sm',
        };
      case 'lg':
        return {
          checkbox: 'w-6 h-6',
          icon: 'w-4 h-4',
          text: 'text-base',
        };
      default:
        return {
          checkbox: 'w-5 h-5',
          icon: 'w-3.5 h-3.5',
          text: 'text-sm',
        };
    }
  };

  const sizeClasses = getSizeClasses();
  const inputId = `${name}-checkbox`;

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={inputId}
        className={`
          relative flex items-start cursor-pointer group transition-all duration-200
          ${disabled ? 'cursor-not-allowed opacity-60' : ''}
          ${isRTL ? 'flex-row-reverse' : 'flex-row'}
        `}
      >
        {/* Checkbox Container */}
        <div className="relative flex-shrink-0">
          {/* Hidden native input */}
          <input
            type="checkbox"
            id={inputId}
            name={name}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
          />

          {/* Custom checkbox visual */}
          <div
            className={`
              ${sizeClasses.checkbox} rounded border-2 transition-all duration-200 flex items-center justify-center
              ${checked || indeterminate
                ? error
                  ? 'border-red-500 bg-red-500'
                  : 'border-blue-900 bg-blue-900'
                : error
                  ? 'border-red-300 bg-white group-hover:border-red-400'
                  : 'border-gray-300 bg-white group-hover:border-blue-400'
              }
              ${disabled 
                ? 'border-gray-200 bg-gray-100' 
                : 'group-focus-within:ring-2 group-focus-within:ring-blue-100'
              }
              ${!disabled ? 'group-hover:scale-105' : ''}
            `}
          >
            {/* Checkmark or Indeterminate Icon */}
            <div
              className={`
                transition-all duration-200 text-white
                ${checked || indeterminate ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
              `}
            >
              {indeterminate ? (
                <Minus className={sizeClasses.icon} strokeWidth={3} />
              ) : (
                <Check className={sizeClasses.icon} strokeWidth={3} />
              )}
            </div>
          </div>

          {/* Focus ring */}
          <div
            className={`
              absolute inset-0 rounded transition-opacity duration-200 pointer-events-none
              ${error ? 'ring-2 ring-red-200' : 'ring-2 ring-blue-200'}
              opacity-0 group-focus-within:opacity-100
            `}
          />
        </div>

        {/* Label Container */}
        <div className={`flex-1 ${isRTL ? 'mr-3' : 'ml-3'}`}>
          {/* Label Text */}
          <span
            className={`
              ${sizeClasses.text} font-medium transition-colors duration-200 select-none block
              ${checked || indeterminate
                ? error
                  ? 'text-red-700'
                  : 'text-blue-900'
                : 'text-gray-700 group-hover:text-gray-900'
              }
              ${disabled ? 'text-gray-400' : ''}
              ${isRTL ? 'text-right' : 'text-left'}
            `}
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1">*</span>
            )}
          </span>

          {/* Helper Text */}
          {helperText && !error && (
            <p className={`text-xs text-gray-500 mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              {helperText}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p className={`text-xs text-red-600 mt-1 flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <svg 
                className={`w-3 h-3 ${isRTL ? 'ml-1' : 'mr-1'} flex-shrink-0`} 
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
          )}
        </div>

        {/* Hover background */}
        <div
          className={`
            absolute inset-0 rounded-lg transition-all duration-200 pointer-events-none -m-1 p-1
            ${!disabled ? 'group-hover:bg-gray-50' : ''}
            ${(checked || indeterminate) && !error ? 'bg-blue-50' : ''}
            ${(checked || indeterminate) && error ? 'bg-red-50' : ''}
            opacity-0 group-hover:opacity-100
            ${(checked || indeterminate) ? 'opacity-30' : ''}
          `}
        />
      </label>
    </div>
  );
};

// Multi-checkbox component for multiple selections
interface MultiCheckboxFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string; helperText?: string }[];
  values?: string[];
  error?: string;
  required?: boolean;
  helperText?: string;
  language?: SupportedLanguage;
  onChange?: (values: string[]) => void;
  className?: string;
  disabled?: boolean;
  layout?: 'vertical' | 'horizontal' | 'grid';
  size?: 'sm' | 'md' | 'lg';
}

export const MultiCheckboxField: React.FC<MultiCheckboxFieldProps> = ({
  label,
  name,
  options,
  values = [],
  error,
  required = false,
  helperText,
  language = 'en',
  onChange,
  className = '',
  disabled = false,
  layout = 'vertical',
  size = 'md',
}) => {
  const isRTL = language === 'fa';

  const handleOptionChange = (optionValue: string, checked: boolean) => {
    if (!onChange || disabled) return;

    const newValues = checked
      ? [...values, optionValue]
      : values.filter(v => v !== optionValue);
    
    onChange(newValues);
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-wrap gap-6';
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 gap-4';
      default:
        return 'space-y-4';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Main Label */}
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

        {/* Main Helper Text */}
        {helperText && !error && (
          <p className={`text-sm text-gray-500 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {helperText}
          </p>
        )}

        {/* Checkbox Options */}
        <div className={getLayoutClasses()}>
          {options.map((option) => (
            <CheckboxField
              key={option.value}
              name={`${name}-${option.value}`}
              label={option.label}
              checked={values.includes(option.value)}
              onChange={(checked) => handleOptionChange(option.value, checked)}
              helperText={option.helperText}
              language={language}
              disabled={disabled}
              size={size}
              error={error && values.length === 0 ? error : undefined}
            />
          ))}
        </div>
      </fieldset>

      {/* Main Error */}
      {error && values.length === 0 && (
        <div className={`mt-3 ${isRTL ? 'text-right' : 'text-left'}`}>
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
        </div>
      )}
    </div>
  );
};

export default CheckboxField;