function Forms(props) {
  if (props.state.checkout === 1) {
    return (
      <div>
          <p>Please enter your info:</p>
          <label htmlFor="name">
            Name:{' '}
            <input type="text" name="name" id="name" value={props.state.name} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="email">
            Email:{' '}
            <input type="email" name="email" id="email" value={props.state.email} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="password">
            Password:{' '}
            <input type="password" name="password" id="password" value={props.state.password} onChange={props.onChange}/>
          </label>
          <br />
        <button type="button" name="previous" className="button previous" onClick={props.handlePrevious}>Previous</button>
        <button type="button" name="next" className="button next" onClick={props.handleNext}>Next</button>
      </div>
    )
  } else if (props.state.checkout === 2) {
    return (
      <div>
          <p>Please enter your info:</p>
          <label htmlFor="addressLine1">
            Address Line 1:{' '}
            <input type="text" name="addressLine1" id="addressLine1" value={props.state.addressLine1} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="addressLine2">
            Address Line 2:{' '}
            <input type="text" name="addressLine2" id="addressLine2" value={props.state.addressLine2} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="city">
            City:{' '}
            <input type="text" name="city" id="city" value={props.state.city} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="state">
            State:{' '}
            <input type="text" name="state" id="state" value={props.state.state} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="zip">
            ZIP Code:{' '}
            <input type="text" name="zip" id="zip" value={props.state.zip} onChange={props.onChange}/>
          </label>
          <br />
        <button type="button" name="previous" className="button previous" onClick={props.handlePrevious}>Previous</button>
        <button type="button" name="next" className="button next" onClick={props.handleNext}>Next</button>
      </div>
    )
  } else if (props.state.checkout === 3) {
    return (
      <div>
          <p>Please enter your info:</p>
          <label htmlFor="cardnumber">
            Credit Card:{' '}
            <input type="text" name="cardnumber" id="cardnumber" value={props.state.cardnumber} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="expdate">
            Expiry Date:{' '}
            <input type="text" name="expdate" id="expdate" value={props.state.expdate} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="cvv">
            CVV:{' '}
            <input type="text" name="cvv" id="cvv" value={props.state.cvv} onChange={props.onChange}/>
          </label>
          <br />
          <label htmlFor="billingZip">
            Billing ZIP Code:{' '}
            <input type="text" name="billingZip" id="billingZip" value={props.state.billingZip} onChange={props.onChange}/>
          </label>
          <br />
        <button type="button" name="previous" className="button previous" onClick={props.handlePrevious}>Previous</button>
        <button type="button" name="next" className="button next" onClick={props.handleNext}>Next</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>Confirm information and purchase</p>
        {Object.keys(props.state).map((k, i) => {
          if (i > 1) {
            return (<p key={i}>{k}: {props.state[k]}</p>)
          }
        })}
        <button type="button" name="previous" className="button previous" onClick={props.handlePrevious}>Previous</button>
        <button type="button" name="purchase" className="button next" onClick={props.handleNext}>PURCHASE!</button>
      </div>
    )
  }
}

export default Forms;