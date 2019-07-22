import React from "react";
import Card from "react-bootstrap/Card";
import hollywood from "../../assets/hollywood1.jpg";
const ReserveCard = () => {
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={hollywood} />
        <Card.Body>
          <Card.Title>Alpha</Card.Title>
          <Card.Text>Oil amount : 250</Card.Text>
          <Card.Text>Gas amount : 250</Card.Text>
          <Card.Text>Date : 7/1/2019</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReserveCard;
