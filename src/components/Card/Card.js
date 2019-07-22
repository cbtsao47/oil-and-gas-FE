import React from "react";
import BootstrapCard from "react-bootstrap/Card";
import hollywood from "../../assets/hollywood1.jpg";
import "./Card.scss";
const Card = ({ well, reserve = true }) => {
  return reserve ? (
    <BootstrapCard style={{ width: "20rem" }}>
      <BootstrapCard.Img variant="top" src={hollywood} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{well.name}</BootstrapCard.Title>
        <BootstrapCard.Text>Oil amount : {well.oil_reserve}</BootstrapCard.Text>
        <BootstrapCard.Text>Gas amount : {well.gas_reserve}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  ) : (
    <div className="card-wrapper">
      <BootstrapCard style={{ width: "20rem" }}>
        <BootstrapCard.Img variant="top" src={hollywood} />
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
