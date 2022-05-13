function Forms(props) {
  if (props.checkout === 1) {
    return (
      <div>
          <p>Please enter your info:</p>
          <label htmlFor="name">
            Name:{' '}
            <input type="text" name="name" id="name" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="email">
            Email:{' '}
            <input type="email" name="email" id="email" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="password">
            Password:{' '}
            <input type="password" name="password" id="password" onChange={props.onChange} required/>
          </label>
          <br />
        <button type="button" name="previous" className="button previous" onClick={props.handlePrevious}>Previous</button>
        <button type="button" name="next" className="button next" onClick={props.handleNext}>Next</button>
      </div>
    )
  } else if (props.checkout === 2) {
    return (
      <div>
          <p>Please enter your info:</p>
          <label htmlFor="addressLine1">
            Address Line 1:{' '}
            <input type="text" name="addressLine1" id="addressLine1" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="addressLine2">
            Address Line 2:{' '}
            <input type="text" name="addressLine2" id="addressLine2" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="city">
            City:{' '}
            <input type="text" name="city" id="city" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="state">
            State:{' '}
            <input type="text" name="state" id="state" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="zip">
            ZIP Code:{' '}
            <input type="text" name="zip" id="zip" onChange={props.onChange}/>
          </label>
          <br />
        <button type="button" name="previous" className="button previous" onClick={props.handlePrevious}>Previous</button>
        <button type="button" name="next" className="button next" onClick={props.handleNext}>Next</button>
      </div>
    )
  } else if (props.checkout === 3) {
    return (
      <div>
          <p>Please enter your info:</p>
          <label htmlFor="cardnumber">
            Credit Card:{' '}
            <input type="text" name="cardnumber" id="cardnumber" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="expdate">
            Expiry Date:{' '}
            <input type="text" name="expdate" id="expdate" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="cvv">
            CVV:{' '}
            <input type="text" name="cvv" id="cvv" onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="billingZip">
            Billing ZIP Code:{' '}
            <input type="text" name="billingZip" id="billingZip" onChange={props.onChange}/>
          </label>
          <br />
        <button type="button" name="previous" className="button previous" onClick={props.handlePrevious}>Previous</button>
        <button type="button" name="next" className="button next" onClick={props.handleNext}>Next</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>Confirm purchase</p>
        <button type="button" name="previous" className="button previous" onClick={props.handlePrevious}>Previous</button>
        <button type="button" name="purchase" className="button next" onClick={props.handleNext}>PURCHASE!</button>
      </div>
    )
  }
}

export default Forms;