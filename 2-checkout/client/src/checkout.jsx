import React from "react";
import { render } from "react-dom";
import Forms from "./forms.jsx";
import axios from "axios";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: 0,
      sessionid: document.cookie,
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      cardnumber: '',
      expdate: '',
      cvv: '',
      billingZip: '',
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

    // axios({
    //   method: 'get',
    //   url: '/checkout',
    //   data: this.state.sessionid,
    // })
    // .then(response => {
    //   console.info(response);
    //   console.log(JSON.stringify(response.data));
    //   // response.data[1].forEach(a => {
    //   //   console.log(a.name, a._buf.data)
    //   // })
    // });
  }

  render() {
    if (this.state.checkout) {
      return <Forms handleNext={this.handleNext} handlePrevious={this.handlePrevious} onChange={this.onChange} state={this.state}/>
    } else {
      return <button type="button" name="checkout" className="button checkout" onClick={this.handleNext}>Checkout</button>
    }
  }

  handleNext(e) {
    e.preventDefault();
    if (this.state.checkout < 4) {
      this.setState({checkout: this.state.checkout + 1});
    } else {
      this.setState({checkout: 0});
    }
    axios({
      method: 'post',
      url: '/checkout',
      data: this.state,
    });
  }

  handlePrevious() {
    if (this.state.checkout) {
      this.setState({checkout: this.state.checkout - 1});
    }
    axios({
      method: 'post',
      url: '/checkout',
      data: this.state,
    });
  }

  onChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }
}

export default Checkout;