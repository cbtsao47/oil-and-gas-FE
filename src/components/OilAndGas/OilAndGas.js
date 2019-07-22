import React from "react";
import Nav from "../Nav/Nav";
import CardList from "../CardList/CardList";
import "./OilAndGas.scss";
import axios from "axios";
class OilAndGas extends React.Component {
  state = {
    cards: []
  };
  componentDidMount() {
    const baseUrl = process.env.REACT_APP_BASEURL;
    axios
      .get(`${baseUrl}/reserve`)
      .then(res => {
        const { data } = res;
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="oilgas oilgas-container">
        <Nav />
        <CardList cards={cards} />
      </div>
    );
  }
}

export default OilAndGas;
