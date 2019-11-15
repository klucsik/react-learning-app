import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SearchForm from "./Search_and_list";
import ErrorBoundary from "./errors";
import HullInfo from "./hullinfo";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import AppB from "./AppB";

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
          <ErrorBoundary>
            <SearchForm
              onSearchSubmit={this.handleSearchChange}
              onHullSelect={this.handleHullSelect}
            />
          </ErrorBoundary>
        )}
        <ErrorBoundary>
          {this.state.appstate === "hullinfo" && (
            <HullInfo hullinfo={this.state.selected_hullinfo} />
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <AppB />
  </Auth0Provider>,
  document.getElementById("root")
);
