import { AppContext } from "@/context/app.context";
import React, { useContext } from "react";

export const Menu = () => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((el) => (
          <li key={el._id.secondCategory}>{el._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
