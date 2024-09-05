import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input"> & {
  label: string;
  validationError: string;
};

export default function Input({ className, label, validationError, ...rest }: InputProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-gray-400">{label}</p>
      <input
        {...rest}
        type="text"
        id={label.replace(/\s+/g, "-")}
        className={twMerge("h-10 w-11/12 rounded-md bg-gray-200 text-zinc-950 px-1.5", className)}
      />
      {validationError && <span className="text-red-500">{validationError}</span>}
    </div>
  );
}
