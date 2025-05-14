import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type TextAreaFieldProps = Omit<ComponentProps<"textarea">, "className"> & {
  id?: string;
  label?: string;
  errorMessage?: string;
  className?: string;
  isRequired?: boolean;
  onChanging?: (value: string) => void;
};

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  (
    {
      id,
      label,
      errorMessage,
      isRequired,
      disabled,
      className,
      onChanging,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cn("relative w-full", className)}>
        {label && (
          <div className="flex flex-row gap-1">
            <label htmlFor={id} className="block text-gray-400 mb-2">
              {label}
              {isRequired && <span className="text-red-500 ml-1">*</span>}
            </label>
          </div>
        )}

        <div className="relative w-full">
          <textarea
            {...rest}
            onChange={(e) => onChanging?.(e.target.value)}
            rows={4}
            id={id}
            name={id}
            ref={ref}
            aria-describedby={`${id}-error ${id}-helper`}
            disabled={disabled}
            className={cn(
              "min-w-full py-3 px-4 rounded-lg bg-transparent border text-black transition-all duration-200",
              "focus:outline-none",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              {
                "border-red-500 focus:border-red-500 focus:ring-red-500":
                  errorMessage,
              },
              className && className
            )}
          />
        </div>

        {errorMessage && (
          <div
            className="flex items-center gap-1 mt-2"
            id={`${id}-error`}
            role="alert"
          >
            <span className="text-red-500 text-sm">{errorMessage}</span>
          </div>
        )}
      </div>
    );
  }
);

TextAreaField.displayName = "TextAreaField";