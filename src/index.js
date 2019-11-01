import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SearchForm from "./Search_and_list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = { searchterm: "első" };
  }

  handleSearchChange(searchterm) {
    this.setState({ searchterm });
  }

  render() {
    return (
      <div className="App">
        előző keresés: {this.state.searchterm}
        <SearchForm onSearchSubmit={this.handleSearchChange} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
