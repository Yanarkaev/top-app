import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ ...props }: IProps) => {
  return <footer {...props}>Footer</footer>;
};
