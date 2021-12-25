import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get(`/api/get/items`).then((res) => {
      const items = res.data.recordset;
      this.setState({ items });
    });
  }

  render() {
    return (
      <>
        <h1>Inventory Details</h1>
        <ui>
          {this.state.items.map((item) => (
            <li>
              {item.name} - {item.quantity}
            </li>
          ))}
        </ui>
      </>
    );
  }
}
