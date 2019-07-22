import React from "react";
import Nav from "../Nav/Nav";
import CardList from "../CardList/CardList";
import "./OilAndGas.scss";
import axios from "axios";
import { Route, withRouter, matchPath } from "react-router-dom";
class OilAndGas extends React.Component {
  state = {
    sites: [],
    extractions: [],
    reserveSelected: true
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const baseUrl = process.env.REACT_APP_BASEURL;
    try {
      const reserve = await axios.get(`${baseUrl}/reserve`);
      const extractions = await axios.get(`${baseUrl}/extraction`);
      this.setState({ sites: reserve.data, extractions: extractions.data });
    } catch (err) {
      console.log(err);
    }
  };
  handleClick = bool => {
    this.setState({ reserveSelected: bool });
  };
  render() {
    const { sites, extractions, reserveSelected } = this.state;
    const match =
      matchPath(this.props.history.location.pathname, {
        path: "/reserve/:id",
        exact: true,
        strict: false
      }) ||
      matchPath(this.props.history.location.pathname, {
        path: "/extraction/:id",
        exact: true,
        strict: false
      });
    let selectedSite, selectedExtraction;
    if (match) {
      selectedSite = sites.filter(site => site.id === Number(match.params.id));
      selectedExtraction = extractions.filter(
        site => site.id === Number(match.params.id)
      );
    }
    return (
      <div className="oilgas oilgas-container">
        <Nav
          sites={sites}
          reserve={reserveSelected}
          handleClick={this.handleClick}
        />
        <Route
          path="/reserve/:id"
          render={props => <CardList {...props} sites={selectedSite} />}
        />
        <Route
          path="/extraction/:id"
          render={props => (
            <CardList {...props} sites={selectedExtraction} reserve={false} />
          )}
        />
      </div>
    );
  }
}

export default withRouter(OilAndGas);
