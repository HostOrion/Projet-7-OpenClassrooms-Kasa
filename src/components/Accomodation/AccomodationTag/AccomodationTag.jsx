import React from "react";

function accomodationTag(props) {
  return (
    <ul className="accomodation_tags">
      {props.tags.map((tag, idx) => {
        return (
          <li className="accomodation_tag" key={idx}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

export default accomodationTag;