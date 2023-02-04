import React from "react";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import data from "../../hotels.json"

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner origin="home" />
        <Card data={data}/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;