import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import styles from "./Button.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "contained" | "outlined";
};

export function Button({
  asChild = false,
  variant = "contained",
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      {...props}
      className={clsx(
        styles.button,
        variant === "contained" && styles.contained,
        variant === "outlined" && styles.outlined,
        className
      )}
    />
  );
}
