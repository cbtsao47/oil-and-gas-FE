import React from "react";
import BootstrapCard from "react-bootstrap/Card";
import hollywood from "../../assets/hollywood.png";
import hanamura from "../../assets/hanamura.png";
import route66 from "../../assets/route66.jpg";
import numbani from "../../assets/numbani.jpg";
import dorado from "../../assets/dorado.jpg";
import "./Card.scss";
const Card = ({ well, reserve = true }) => {
  const imgMap = {
    1: hollywood,
    2: hanamura,
    3: route66,
    4: numbani,
    5: dorado
  };
  return reserve ? (
    <BootstrapCard style={{ width: "20rem" }}>
      <BootstrapCard.Img variant="top" src={imgMap[well.site_id]} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{well.name}</BootstrapCard.Title>
        <BootstrapCard.Text>Oil amount : {well.oil_reserve}</BootstrapCard.Text>
        <BootstrapCard.Text>Gas amount : {well.gas_reserve}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  ) : (
    <div className="card-wrapper">
      <BootstrapCard style={{ width: "20rem" }}>
        <BootstrapCard.Img variant="top" src={imgMap[well.site]} />
        <BootstrapCard.Body>
          <BootstrapCard.Title>{well.well}</BootstrapCard.Title>
          <BootstrapCard.Text>
            Extracted Oil amount : {well.oil_amount}
          </BootstrapCard.Text>
          <BootstrapCard.Text>
            Extracted Gas amount : {well.gas_amount}
          </BootstrapCard.Text>
          <BootstrapCard.Text>Date:{well.date}</BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
    </div>
  );
};

export default Card;
