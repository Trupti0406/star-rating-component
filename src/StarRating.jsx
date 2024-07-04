import { useState } from "react";

export default function StarRating({ starCount = 5 }) {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <div className="container">
      <>
        {new Array(starCount).fill(0).map((value, index) => {
          return (
            <span
              className={
                index < hoverValue || (hoverValue == 0 && index < starValue)
                  ? "gold"
                  : ""
              }
              onClick={() => setStarValue(index + 1)}
              onMouseEnter={() => setHoverValue(index + 1)}
              onMouseLeave={() => setHoverValue(0)}
            >
              &#9733;
            </span>
          );
        })}
        <div>
          Rating: {starValue} / {starCount}
        </div>
      </>
    </div>
  );
}
