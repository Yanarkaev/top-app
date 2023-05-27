import { Rating } from "@/components/Rating/Rating";
import { MenuItem } from "@/interfaces/menu.interface";
import { withLayout } from "@/layout/withLayout";
import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";

const Home = ({ menu }: HomeProps) => {
  const [rating, setRating] = useState<number>(4);
  return <div></div>;
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    "https://courses-top.ru" + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
