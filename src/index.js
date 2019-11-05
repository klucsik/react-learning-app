import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SearchForm from "./Search_and_list";
import HulladekCard from "./Card";
import ErrorBoundary from "./errors";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleHullSelect = this.handleHullSelect.bind(this);
    this.state = {
      appstate: "search",
      searchterm: "első",

      selected_hullinfo: {
        alias_list: ["blokk", "hőpapír"],
        hull_id: 25,
        name: "Alma",
        picurl: "/static/images/elso.jpg"
      }
    };
  }

  handleSearchChange(searchterm) {
    this.setState({ searchterm });
  }
  handleHullSelect(hullinfo) {
    this.setState({ selected_hullinfo: hullinfo, appstate: "hullinfo" });
  }
  render() {
    return (
      <div className="App">
        <p>előző keresés: {this.state.searchterm}</p>
        <p>megjelenő hulladék: {this.state.selected_hullinfo.name}</p>
        {this.state.appstate === "search" && (
          <SearchForm
            onSearchSubmit={this.handleSearchChange}
            onHullSelect={this.handleHullSelect}
          />
        )}
        <ErrorBoundary>
          {this.state.appstate === "hullinfo" && (
            <HulladekCard hullinfo={this.state.selected_hullinfo} />
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
