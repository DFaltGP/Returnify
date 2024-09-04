import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"div"> & {
  label: string;
  select?: boolean;
  selectOptions?: string[];
};

export default function Input({
  className,
  label,
  select,
  selectOptions,
  ...rest
}: InputProps) {
  return (
    <div
      {...rest}
      className={twMerge("flex flex-col items-start gap-2", className)}
    >
      <p className="text-gray-400">{label}</p>
      {select ? (
        <div className="flex items-center">
          <input
            type="text"
            name={label}
            id={label}
            className="h-10 w-[200px] rounded-l-md bg-gray-200 outline-violet-700 text-zinc-950 px-1.5"
          />
          <select
            name={`${label}-select`}
            id={`${label}-select`}
            className="h-10 rounded-r-md bg-violet-700 text-white"
          >
            {selectOptions &&
              selectOptions.map((sl) => <option value={sl}>{sl}</option>)}
          </select>
        </div>
      ) : (
        <input
          type="text"
          name={label}
          id={label}
          className="h-10 w-11/12 rounded-md bg-gray-200 outline-violet-700 text-zinc-950 px-1.5"
        />
      )}
    </div>
  );
}
