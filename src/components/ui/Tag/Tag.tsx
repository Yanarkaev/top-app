import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Tag.module.scss";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: "outlined" | "green" | "gray";
  children: ReactNode;
  className?: string;
  href?: string;
}

export const Tag = ({
  variant = "outlined",
  children,
  href,
  className = "",
  ...props
}: IProps) => {
  return (
    <div className={cn(styles.Tag, styles[variant], className)} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
