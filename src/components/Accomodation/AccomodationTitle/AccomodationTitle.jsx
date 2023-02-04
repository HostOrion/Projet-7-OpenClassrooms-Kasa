import React from "react";

function accomodationTitle(props) {
  return (
    <div>
      <h1 className="accomodation_title">{props.title}</h1>
      <h2 className="accomodation_location">{props.location}</h2>
    </div>
  );
}


export default accomodationTitle;