import { Rating } from "@/components/Rating/Rating";
import { Button, H, P, Tag } from "@/components/ui";
import { useState } from "react";

const index = () => {
  const [rating, setRating] = useState<number>(4)
  return (
    <div>
      
      <Rating rating={rating} setRating={setRating} isEditable={true}/>
    </div>
  );
};

export default index;
