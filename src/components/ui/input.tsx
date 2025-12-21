import { type ComponentProps, type Ref } from "react";

import { cn } from "@/lib/utils";

interface InputProps extends ComponentProps<"input"> {
  ref?: Ref<HTMLInputElement>;
}

const Input = ({
  className,
  type,
  value,
  onChange,
  ref,
  ...props
}: InputProps) => {
  // Handle controlled vs uncontrolled inputs properly
  // If value is provided (even empty string), it's controlled and needs onChange
  // If value is undefined, it's uncontrolled
  const isControlled = value !== undefined;

  return (
    <input
      type={type}
      {...(isControlled ? { value: value ?? "" } : {})}
      onChange={onChange}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
Input.displayName = "Input";

export { Input };
