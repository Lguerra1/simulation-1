import React, { Component } from 'react'
import Product from './../product/Product'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          inventory: this.props.inventory
        }
      }
 
    render() {

        let display = this.state.inventory.map((item, i) => {
            return (
                <h1 key={i}>{item}</h1>
            )
        })
     
        return (
            <div>
                Dashboard
                <Product />
               <h1> {display}</h1>
                      

            </div>
        )
    }
}
