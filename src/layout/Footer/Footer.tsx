import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Footer.module.scss";
import cn from "classnames";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ className, ...props }: IProps) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.copyrights}>
        OwlTop &copy; 2020-2023 Все права защищены
      </div>

        <a href="" className={styles.link}>
          Пользовательское соглашение
        </a>
        <a href="" className={styles.link}>
          Политика конфиденциальности
        </a>
    </footer>
  );
};
