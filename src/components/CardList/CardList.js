import React from "react";
import Card from "../Card/Card";
const CardList = ({ cards }) => {
  return (
    <div className="cardlist">
      {cards.map(card => (
        <Card />
      ))}
    </div>
  );
};

export default CardList;
