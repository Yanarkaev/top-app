import { Rating } from "@/components/Rating/Rating";
import { withLayout } from "@/layout/withLayout";
import { useState } from "react";

const Home = () => {
  const [rating, setRating] = useState<number>(4);
  return (
    <div>
      <Rating rating={rating} setRating={setRating} isEditable={true} />
    </div>
  );
};

export default withLayout(Home);
