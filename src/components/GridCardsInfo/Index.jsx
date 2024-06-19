import { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../CardHome/CardHome";
import "./GridCardsInfo.css";

const GridCards = () => {
  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
          <Card
             title={"Guilherme Modesto"}
             value={"18 anos quase 19"}
             info={"fa numero 1 do ja morant"}
             >
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
