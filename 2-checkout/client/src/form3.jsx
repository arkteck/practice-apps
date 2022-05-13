function Form3(props) {
  return (
    <div>
      <label>
        Please enter your info:
        <br />
        <input type="text" name="addressLine1" placeholder="Credit Card #" onChange={props.onChange}/>
        <br />
        <input type="text" name="addressLine2" placeholder="Expiry Date" onChange={props.onChange}/>
        <br />
        <input type="text" name="cvv" placeholder="CVV" onChange={props.onChange}/>
        <input type="text" name="billingZip" placeholder="Billing ZIP code" onChange={props.onChange}/>
      </label>
      <button type="button" name="checkout" className="checkout" onClick={props.onClick}>Form 2</button>
    </div>
  )
}

export default Form3;