import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard'
import Form from './component/form/Form'
import Header from './component/header/Header'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory')
      .then(response => {
        console.log(response)
        this.setState({ inventory: response.data })
      })
  }

 

  render() {
    return (
      <div>
        <Dashboard inventory={this.state.inventory} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
