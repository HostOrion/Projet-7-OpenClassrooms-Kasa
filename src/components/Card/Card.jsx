import { NavLink } from "react-router-dom";

function Card({data}) {

  return (
    <section className="cards">
      {data.map((accomodation) => (
        <NavLink to={`/accomodation/${accomodation.id}`} key={accomodation.id}>
          <article className="card_thumb">
            <img
              src={accomodation.cover}
              alt={accomodation.title}
              className="card_img"
            ></img>
            <p className="card_text">{accomodation.title}</p>
          </article>
        </NavLink>
      ))}
    </section>
  );
}

export default Card;