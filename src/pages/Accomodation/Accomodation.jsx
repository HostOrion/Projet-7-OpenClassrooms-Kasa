import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Error from "../Error/Error";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import AccomodationHost from "../../components/Accomodation/AccomodationHost/AccomodationHost";
import AccomodationRating from "../../components/Accomodation/AccomodationRating/AccomodationRating";
import AccomodationTag from "../../components/Accomodation/AccomodationTag/AccomodationTag";
import AccomodationTitle from "../../components/Accomodation/AccomodationTitle/AccomodationTitle";
import { useParams } from 'react-router-dom';
import data from "../../hotels.json"

function Accomodation() {   

  const {id} = useParams()
  const Accomodation = data.find((item) => item.id === id);
  if (!Accomodation) return <Error />;

  return (
    <div className="Accomodation">
      <Header />
      <Slideshow pictures={Accomodation.pictures} />
      <section className="Accomodation_body">
        <div className="Accomodation_wrapper">
          <div className="Accomodation_info">
            <AccomodationTitle
              title={Accomodation.title}
              location={Accomodation.location}
            />
            <AccomodationTag tags={Accomodation.tags} />
          </div>
          <div className="Accomodation_host">
            <AccomodationHost host={Accomodation.host} />
            <AccomodationRating ratings={Accomodation.rating} />
          </div>
        </div>
        <div className="Accomodation_details">
          <Collapse
            title="Description"
            description={Accomodation.description}
            class="dropdown_Accomodation"
          ></Collapse>
          <Collapse
            title="Équipements"
            description={Accomodation.equipments}
            class="dropdown_Accomodation"
          ></Collapse>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Accomodation;