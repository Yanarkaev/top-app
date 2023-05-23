import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "outlined";
  className?: string;
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: IProps) => {
  return (
    <button
      className={cn(styles.Button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
