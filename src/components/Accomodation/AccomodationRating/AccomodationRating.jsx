import React from "react";
import { ReactComponent as Star } from "./star.svg";

function accomodationRating(props) {
  const ratingNumber = [1, 2, 3, 4, 5];

  return (
    <div className="accomodation_rating">
      {ratingNumber.map((el) => {
        return (
          <Star
            fill={el <= props.ratings ? "#ff6060" : "#e3e3e3"}
            key={`star-${el}`}
            className="accomodation_star"
          ></Star>
        );
      })}
    </div>
  );
}

export default accomodationRating;