function Forms (props) {
    if (props.state.checkout === 1) {
      return (
        <div>
          <form id="form1">
            <h4>Please {props.state.glitch > .1 ? 'enter' : 'give me'} your info:</h4>
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
            <button type="button" name="previous" className="button previous button-58" onClick={props.handlePrevious}>Previous</button>
            <button type="submit" name="next" className="button next button-58" form="form1" onClick={props.validateForm1} disabled={!validateForm(1, props.state)}>Next</button>
          </form>
          <div style={{'color': 'red'}}>{props.state.errMsg}</div>
        </div>
      )
    } else if (props.state.checkout === 2) {
      return (
        <div>
          <form id="form2">
            <h4>Please {props.state.glitch > .1 ? 'enter' : 'give me'} your info:</h4>
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
              <input type="text" name="state" id="state" minLength="2" maxLength="2" value={props.state.state} onChange={props.onChange}/>
            </label>
            <br />
            <label htmlFor="zip">
              ZIP Code:{' '}
              <input type="number" name="zip" id="zip" minLength="5" maxLength="5" value={props.state.zip} onChange={props.onChange}/>
            </label>
            <br />
            <button type="button" name="previous" className="button previous button-58" onClick={props.handlePrevious}>Previous</button>
            <button type="submit" name="next" className="button next button-58" form="form2" onClick={props.validateForm2} disabled={!validateForm(2, props.state)}>Next</button>
          </form>
          <div style={{'color': 'red'}}>{props.state.errMsg}</div>
        </div>
      )
    } else if (props.state.checkout === 3) {
      return (
        <div>
          <form id="form3">
            <h4>Please {props.state.glitch > .1 ? 'enter' : 'give me'} your info:</h4>
            <label htmlFor="cardnumber">
              Credit Card:{' '}
              <input type="number" name="cardnumber" id="cardnumber" value={props.state.cardnumber} onChange={props.onChange}/>
            </label>
            <br />
            <label htmlFor="expdate">
              Expiry Date:{' '}
              <input type="date" name="expdate" id="expdate" value={props.state.expdate} onChange={props.onChange}/>
            </label>
            <br />
            <label htmlFor="cvv">
              CVV:{' '}
              <input type="number" name="cvv" id="cvv" minLength="3" maxLength="3" value={props.state.cvv} onChange={props.onChange}/>
            </label>
            <br />
            <label htmlFor="billingZip">
              Billing ZIP Code:{' '}
              <input type="number" name="billingZip" id="billingZip" minLength="5" maxLength="5" value={props.state.billingZip} onChange={props.onChange}/>
            </label>
            <br />
            <button type="button" name="previous" className="button previous button-58" onClick={props.handlePrevious}>Previous</button>
            <button type="submit" name="next" className="button next button-58" form="form3" onClick={props.validateForm3} disabled={!validateForm(3, props.state)}>Next</button>
          </form>
          <div style={{'color': 'red'}}>{props.state.errMsg}</div>
        </div>
      )
    } else if (props.state.checkout === 4) {
      return (
        <div>
          <h4>Confirm information and {props.state.glitch > .1 ? 'purchase' : 'give me'}</h4>
          {Object.keys(props.state).map((k, i) => {
            if (i > 1 && i < 14) {
              return (<p key={i}>{k}: {props.state[k]}</p>)
            }
          })}
          <button type="button" name="previous" className="button previous button-58" onClick={props.handlePrevious}>Previous</button>
          <button type="button" name="purchase" className="button next button-58" onClick={props.handleNext}>PURCHASE!</button>
        </div>
      )
    } else {
      return (
        <h1>Thank you so much for your {props.state.glitch > .1 ? 'purchase' : 'information'}!</h1>
      )
    }

  }

  function validateForm(form, state) {

    if (form === 1) {
      return /.+/.test(state.name) && /.+/.test(state.email) && /.+/.test(state.password);
    } else if (form === 2) {
      return /.+/.test(state.addressLine1) && /.+/.test(state.city) && /.+/.test(state.state) && /.+/.test(state.zip);
    } else if (form === 3) {
      return /.+/.test(state.cardnumber) && /.+/.test(state.expdate) && /.+/.test(state.cvv) && /.+/.test(state.billingZip);
    }
    return true;
  }

export default Forms;