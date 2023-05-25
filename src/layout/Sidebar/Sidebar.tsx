import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar = ({ ...props }: IProps) => {
  return <aside {...props}>Sidebar</aside>;
};
