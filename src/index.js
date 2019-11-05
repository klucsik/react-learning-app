import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SearchForm from "./Search_and_list";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleHullSelect = this.handleHullSelect.bind(this);
    this.state = { searchterm: "első" };
  }

  handleSearchChange(searchterm) {
    this.setState({ searchterm });
  }
  handleHullSelect(hullinfo) {
    alert("felért" + hullinfo);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/sample" />;
    }
    return (
      <Router>
        <div className="App">
          előző keresés: {this.state.searchterm}
          <SearchForm
            onSearchSubmit={this.handleSearchChange}
            onHullSelect={this.handleHullSelect}
          />
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
