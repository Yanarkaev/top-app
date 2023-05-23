import { ReactNode, DetailedHTMLProps } from "react";
import cn from "classnames";
import styles from "./H.module.scss";

interface IProps{
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}

export const H = ({ tag, children, className = "" }: IProps) => {
  const Tag = tag;
  return (
    <Tag className={cn(styles.H, styles[tag], className)}>{children}</Tag>
  );
};
