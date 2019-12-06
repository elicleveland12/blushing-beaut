import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './App.css'
const API_URL = "http://localhost:3024/charges"

class PaymentForm extends Component {

  state = {
    product: {
      name: "Travel Coffee Mug",
      price: 29.99,
      description: "20 oz stainless steel tumbler",
      primaryColor: "gld",
      secondaryColor: "blk",
      textLineOne: null,
      textLineTwo: null,
      textLineThree: null,
      textLineFour: null,
      font: null,
      decalDescription: null,
      imageSrc: "https://i.etsystatic.com/15672494/r/il/87dc7e/2153030559/il_1588xN.2153030559_4b1o.jpg"
    },
    cardNum: "",
    exp: "",
    cvv: ""
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!")
  }

  render(){
    console.log(this.state.cardNum);
    return(
      <div className="app-container">
        <h1 style={{color: 'white'}}>{this.state.product.name}</h1>
        <h2 style={{color: 'white'}}>{this.state.product.price}</h2>
        <h2 style={{color: 'white'}}>{this.state.product.description}</h2>
        <img src={this.state.product.imageSrc} alt={this.state.product.name} style={{height: 350, width: 250}}/>
        <div className="checkout">
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button onClick={this.submit}>Purchase</button>
        </div>
      </div>
    )
  }
}

export default injectStripe(PaymentForm)
