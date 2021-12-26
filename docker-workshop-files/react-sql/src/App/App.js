import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`/api/get/items`)
      .then(res => {
        const items = res.data.recordset;
        this.setState({ items });
      })
  }

  render() {
    return (
      <ul>
        { this.state.items.map(item => <li>{item.name} - {item.quantity}</li>)}
      </ul>
    )
  }
}