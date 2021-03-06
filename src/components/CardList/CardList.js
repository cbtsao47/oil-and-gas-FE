import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";
const CardList = ({ sites, reserve = true }) => {
  return (
    <div className="cardlist">
      {sites.map(site =>
        site.wells.map(well => (
          <Card key={well.id} well={well} reserve={reserve} />
        ))
      )}
    </div>
  );
};

export default CardList;
