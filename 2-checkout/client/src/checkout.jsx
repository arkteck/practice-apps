import React from "react";
import { render } from "react-dom";
import Form1 from "./form1.jsx";
import Form2 from "./form2.jsx";
import Form3 from "./form3.jsx";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: 0,
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      cvv: '',
      billingZip: '',
    }
    this.onClickCheckout = this.onClickCheckout.bind(this);
    this.onClickForm1 = this.onClickForm1.bind(this);
    this.onClickForm2 = this.onClickForm2.bind(this);
    this.onClickForm3 = this.onClickForm3.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    console.log(this.state.checkout);
    if (this.state.checkout === 1) {
      return <Form1 onClick={this.onClickForm1} onChange={this.onChange}/>
    } else if (this.state.checkout === 2) {
      return <Form2 onClick={this.onClickForm2} onChange={this.onChange}/>
    } else if (this.state.checkout === 3) {
      return <Form3 onClick={this.onClickForm3} onChange={this.onChange}/>
    } else {
      return <button type="button" name="checkout" className="checkout" onClick={this.onClickCheckout}>Checkout</button>
    }
  }

  onClickCheckout() {
    this.setState({checkout: 1});
  }

  onClickForm1() {
    this.setState({checkout: 2});
  }

  onClickForm2() {
    this.setState({checkout: 3});
  }

  onClickForm3() {
    this.setState({checkout: 0});
  }

  onChange(e) {
    console.log(e.target.name, e.target.value);
  }
}

export default Checkout;