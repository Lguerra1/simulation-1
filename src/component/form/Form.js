import React, {Component} from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            imgUrl: '',
            productName: '',
            price: ''
        }
      
    }

    

    imgUrlInput(val){
        this.setState({
            imgUrl: val
        })
    }

    productName(val){
        this.setState({
            productName: val
        })
    }

    price(val){        
        this.setState({
            price: val
        })
    }

    cancelInput(){
        this.setState({
            imgUrl: '',
            price: '',
            productName: ''
            
        })
    }
    

    render(){
        return(
            <div>
                Form
                <input placeholder="imgUrl" value={this.state.imgUrl} onChange={(e) => this.imgUrlInput(e.target.value)} />
                <input placeholder="productName" value={this.state.productName} onChange={(e) => this.productName(e.target.value)} />
                <input placeholder="price" value={this.state.price} onChange={(e) => this.price(e.target.value)}/>

                <button>Add to</button>
                <button onClick={() => this.cancelInput()}>Cancel </button>
            </div>
        )
    }
}
