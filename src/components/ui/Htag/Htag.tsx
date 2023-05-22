import cn from "classnames";
import { ReactNode } from "react";
import styles from "./Htag.module.scss";

interface IProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}

export const Htag = ({ tag, children, className = "" }: IProps) => {
  const Tag = tag;
  return (
    <Tag className={cn(styles.Htag, styles[tag], className)}>{children}</Tag>
  );
};
