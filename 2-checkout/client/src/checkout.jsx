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
      errMsg: '',
      glitch: 1,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validateForm1 = this.validateForm1.bind(this);
    this.validateForm2 = this.validateForm2.bind(this);
    this.validateForm3 = this.validateForm3.bind(this);
    this.postInfo = this.postInfo.bind(this);
    this.glitchyText = this.glitchyText.bind(this);
  }

  componentDidMount() {

    axios({
      method: 'get',
      url: `/checkout/${this.state.sessionid}`,
    })
    .then(response => {
      if (response.data[0].length) {
        this.setState(response.data[0][0]);
      }
    })
    .catch(err => {
      console.log('error retrieving session', err)
    });
    this.glitchyText();
  }

  render() {
    if (this.state.checkout) {
      return <Forms handleNext={this.handleNext} handlePrevious={this.handlePrevious} onChange={this.onChange} state={this.state} validateForm1={this.validateForm1} validateForm2={this.validateForm2} validateForm3={this.validateForm3}/>
    } else {
      return <div><h4>Just click this button and enter your details!</h4><button type="button" name="checkout" className="button checkout" onClick={this.handleNext}>CHECKOUT</button></div>
    }
  }

  handleNext(e) {
    e.preventDefault();
    if (this.state.checkout < 5) {
      this.setState({checkout: this.state.checkout + 1},this.postInfo);
    } else {
      this.setState({checkout: 0},this.postInfo);
    }
  }

  handlePrevious() {
    if (this.state.checkout) {
      this.setState({checkout: this.state.checkout - 1},this.postInfo);
    }
  }

  onChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  validateForm1(e) {
    e.preventDefault();
    let errorStr = [];
    if (!/^[a-zA-Z \-]+$/.test(this.state.name)) {
      errorStr.push(<p>Please enter your name.</p>)
    }
    if (!/^\w+@\w+\.[a-z]+$/i.test(this.state.email)) {
      errorStr.push(<p>Please enter a valid email address.</p>)
    }
    if (!/^[a-zA-Z0-9]{8,}$/.test(this.state.password)) {
      errorStr.push(<p>Password must be at least 8 characters long.</p>)
    }
    this.setState({errMsg: errorStr})
    if (errorStr.length === 0) {
      this.handleNext(e);
    }
  }

  validateForm2(e) {
    e.preventDefault();
    let errorStr = [];
    if (!/./.test(this.state.addressLine1)) {
      errorStr.push(<p>Please enter your address</p>)
    }
    if (!/^[a-z ]+$/i.test(this.state.city)) {
      errorStr.push(<p>Please enter a valid email address.</p>)
    }
    if (!/^[a-zA-Z]{2}$/.test(this.state.state)) {
      errorStr.push(<p>Please enter your state.</p>)
    }
    if (!/^\d{5}$/.test(this.state.zip)) {
      errorStr.push(<p>Please enter a valid ZIP code.</p>)
    }
    this.setState({errMsg: errorStr})
    if (errorStr.length === 0) {
      this.handleNext(e);
    }
  }

  validateForm3(e) {
    e.preventDefault();
    let errorStr = [];
    if (!/^\d+$/.test(this.state.cardnumber)) {
      errorStr.push(<p>Please enter your credit card number.</p>)
    }
    if (!/./i.test(this.state.expdate)) {
      errorStr.push(<p>Please enter a valid email address.</p>)
    }
    if (!/^\d{3}$$/.test(this.state.cvv)) {
      errorStr.push(<p>Please enter a valid CVV.</p>)
    }
    if (!/^\d{5}$/.test(this.state.billingZip)) {
      errorStr.push(<p>Please enter a valid billing ZIP code.</p>)
    }
    this.setState({errMsg: errorStr})
    if (errorStr.length === 0) {
      this.handleNext(e);
    }
  }

  postInfo() {
    return axios({
      method: 'post',
      url: '/checkout',
      data: this.state,
    })
    .then(() => {

    })
    .catch(err => {
      console.log('error posting info', err);
    });
  }

  glitchyText() {
    setInterval(() => {
      this.setState({glitch: Math.random()})
    }, 100);
  }

}

export default Checkout;