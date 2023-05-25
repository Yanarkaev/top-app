import React, { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.scss";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
