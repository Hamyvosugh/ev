'use client';

import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { SupportedLanguage, FormStep } from '@/types/WebsiteRequestForm';

interface FormProgressProps {
  steps: FormStep[];
  currentStep: number;
  language?: SupportedLanguage;
  className?: string;
  onStepClick?: (stepIndex: number) => void;
  showLabels?: boolean;
  variant?: 'default' | 'compact' | 'minimal';
}

const FormProgress: React.FC<FormProgressProps> = ({
  steps,
  currentStep,
  language = 'en',
  className = '',
  onStepClick,
  showLabels = true,
  variant = 'default',
}) => {
  const isRTL = language === 'fa';

  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'active';
    return 'pending';
  };

  const getStepClasses = (stepIndex: number, status: string) => {
    const baseClasses = 'transition-all duration-300 rounded-full border-2 flex items-center justify-center';
    
    switch (variant) {
      case 'compact':
        return `${baseClasses} w-8 h-8 text-sm`;
      case 'minimal':
        return `${baseClasses} w-6 h-6 text-xs`;
      default:
        return `${baseClasses} w-10 h-10 text-sm`;
    }
  };

  const getStepColors = (status: string, isClickable: boolean) => {
    const hoverClasses = isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default';
    
    switch (status) {
      case 'completed':
        return `bg-blue-900 border-blue-900 text-white ${hoverClasses}`;
      case 'active':
        return `bg-blue-100 border-blue-900 text-blue-900 ring-4 ring-blue-100 ${hoverClasses}`;
      default:
        return `bg-gray-100 border-gray-300 text-gray-400 ${hoverClasses}`;
    }
  };

  const getConnectorClasses = (stepIndex: number) => {
    const isCompleted = stepIndex < currentStep;
    const baseClasses = 'transition-all duration-300';
    
    if (variant === 'minimal') {
      return `${baseClasses} h-0.5 ${isCompleted ? 'bg-blue-900' : 'bg-gray-200'}`;
    }
    
    return `${baseClasses} h-1 ${isCompleted ? 'bg-blue-900' : 'bg-gray-200'}`;
  };

  const handleStepClick = (stepIndex: number) => {
    if (onStepClick && stepIndex <= currentStep) {
      onStepClick(stepIndex);
    }
  };

  if (variant === 'minimal') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            const isClickable = Boolean(onStepClick && index <= currentStep);
            
            return (
              <React.Fragment key={step.id}>
                <div
                  onClick={() => handleStepClick(index)}
                  className={`
                    ${getStepClasses(index, status)}
                    ${getStepColors(status, isClickable)}
                  `}
                >
                  {status === 'completed' ? (
                    <Check className="w-3 h-3" strokeWidth={3} />
                  ) : (
                    <span className="font-bold">{index + 1}</span>
                  )}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-2">
                    <div className={getConnectorClasses(index)} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Progress percentage */}
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Progress Bar Background */}
      <div className="relative">
        {/* Steps Container */}
        <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center relative`}>
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            const isClickable = Boolean(onStepClick && index <= currentStep);
            
            return (
              <React.Fragment key={step.id}>
                {/* Step Circle */}
                <div className="relative flex flex-col items-center">
                  <div
                    onClick={() => handleStepClick(index)}
                    className={`
                      ${getStepClasses(index, status)}
                      ${getStepColors(status, isClickable)}
                      relative z-10
                    `}
                  >
                    {status === 'completed' ? (
                      <Check className="w-5 h-5" strokeWidth={3} />
                    ) : (
                      <span className="font-bold">{index + 1}</span>
                    )}
                  </div>
                  
                  {/* Step Label */}
                  {showLabels && (
                    <div className={`mt-3 text-center max-w-24 ${variant === 'compact' ? 'max-w-20' : ''}`}>
                      <p className={`
                        text-xs font-medium transition-colors duration-300
                        ${status === 'active' ? 'text-blue-900' : status === 'completed' ? 'text-blue-700' : 'text-gray-500'}
                        ${isRTL ? 'text-right' : 'text-left'}
                      `}>
                        {step.title}
                      </p>
                      {step.subtitle && variant === 'default' && (
                        <p className="text-xs text-gray-400 mt-1 leading-tight">
                          {step.subtitle}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 relative z-0 mx-4">
                    <div className={getConnectorClasses(index)} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Progress Percentage and Current Step Info */}
        <div className={`mt-6 flex justify-between items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <p className="text-sm font-medium text-gray-900">
              Step {currentStep + 1} of {steps.length}
            </p>
            <p className="text-xs text-gray-500">
              {steps[currentStep]?.title}
            </p>
          </div>
          
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="text-sm font-bold text-blue-900">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </div>
            <div className={`ml-2 text-xs text-gray-500 ${isRTL ? 'ml-0 mr-2' : ''}`}>
              Complete
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-900 to-blue-700 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              transform: isRTL ? 'scaleX(-1)' : 'none',
            }}
          />
        </div>
      </div>
      
      {/* Navigation Breadcrumb (Optional) */}
      {variant === 'default' && (
        <div className={`mt-4 flex items-center text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          {steps.slice(0, currentStep + 1).map((step, index) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => handleStepClick(index)}
                className={`
                  hover:text-blue-900 transition-colors duration-200
                  ${index === currentStep ? 'text-blue-900 font-medium' : ''}
                  ${onStepClick && index <= currentStep ? 'cursor-pointer' : 'cursor-default'}
                `}
              >
                {step.title}
              </button>
              {index < currentStep && (
                <ChevronRight 
                  className={`w-4 h-4 mx-2 ${isRTL ? 'rotate-180' : ''}`} 
                />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormProgress;