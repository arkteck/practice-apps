function Form2(props) {
  return (
    <div>
      <label>
        Please enter your info:
        <br />
        <input type="text" name="addressLine1" placeholder="Address Line 1" onChange={props.onChange}/>
        <br />
        <input type="text" name="addressLine2" placeholder="Address Line 2" onChange={props.onChange}/>
        <br />
        <input type="text" name="city" placeholder="City" onChange={props.onChange}/>
        <input type="text" name="state" placeholder="State" onChange={props.onChange}/>
        <input type="text" name="zip" placeholder="ZIP code" onChange={props.onChange}/>
      </label>
      <button type="button" name="checkout" className="checkout" onClick={props.onClick}>Form 2</button>
    </div>
  )
}

export default Form2;