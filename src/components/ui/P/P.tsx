import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./P.module.scss";

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "m" | "l";
  children: ReactNode;
  className?: string;
}

export const P = ({
  size = "m",
  children,
  className = "",
  ...props
}: IProps) => {
  return (
    <p className={cn(styles.P, styles[size], className)} {...props}>
      {children}
    </p>
  );
};
