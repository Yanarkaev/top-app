import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import StarIcon from "../../../public/star.svg";
import cn from "classnames";
import styles from "./Rating.module.scss";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (i: number) => void;
}

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRaiting: number) => {
    const updatedArray = ratingArray.map((el: JSX.Element, i: number) => (
      <span
        key={i + 1}
        className={cn(styles.star, {
          [styles.filled]: currentRaiting > i,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => handleClick(i + 1)}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(i + 1, e)}
        />
      </span>
    ));

    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (isEditable) {
      constructRating(i);
    }
  };

  const handleClick = (i: number) => {
    if (isEditable && setRating) {
      setRating(i);
    }
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (setRating && e.code === "Space") {
      setRating(i);
    }
  };
  return (
    <div {...props}>
      {ratingArray.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};
