import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import GridCards from "../../components/GridCardsInfo/Index";

import "./TelaInfo.css";

const TelaInfo = ({ socket }) => {  
  return (
    <>
      <Header icon="home" title="Home" />
        <div className="containerTelaHome">
          <GridCards />
        </div>
      <Footer />
    </>
  );
};

export default TelaInfo;
