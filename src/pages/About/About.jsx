import React from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CollapseContainer from "../../components/Collapse/CollapseContent.json";

function About() {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner origin="about" />
        <section className="dropdown">
          {CollapseContainer.map((text, idx) => {
            return (
              <Collapse
                title={text.title}
                key={idx}
                description={text.description}
                class="dropdown_container"
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
