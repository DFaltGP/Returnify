import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label: string;
};

export default function Input({ label, ...rest }: InputProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-gray-400">{label}</p>
      <input
        {...rest}
        type="text"
        id={label.replace(/\s+/g, "-")}
        className="h-10 w-11/12 rounded-md bg-gray-200 outline-violet-700 text-zinc-950 px-1.5"
      />
    </div>
  );
}
