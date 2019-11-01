import React from "react";
import HulladekCard from "./Card"

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: null,
      isLoaded: false,
      hullinfoList: [],
      APImessage: "",
      hullinfotest:  {
        "alias_list": [
            "alias2",
            "ÁRVÍZTŰRŐ TÜKÖRFÚRÓGÉP",
            "krumpli"
        ],
        "hull_id": 23,
        "name": "Remény",
        "picurl": "/static/images/masodik.jpg"
    },
    items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async fetchSearchResult() {
    const rawResponse = await fetch(
      "https://hovadobjam-test.herokuapp.com/api/alias",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alias: this.state.value })
      }
    );
    const content = await rawResponse.json();
    this.setState({hullinfoList: content.data})
    console.log(this.state.hullinfoList);
    this.renderCards();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('The Search has begun: ' + this.state.value);
    this.props.onSearchSubmit(this.state.value);
    this.fetchSearchResult();
    
    event.preventDefault();
  }

  renderCards(){
    console.log('cards!')
    this.state.hullinfoList.map(() =>
    console.log(item)


  )}

  render() {
    const searchterm = this.value;
    const hullcardlist=this.state.hullinfoList

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search for:
            <input
              type="text"
              value={searchterm}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <HulladekCard hullinfo={this.state.hullinfotest}/>

        




      </div>
    );
  }
}

