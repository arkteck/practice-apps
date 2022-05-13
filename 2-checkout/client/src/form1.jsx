function Form1(props) {
  return (
    <div>
      <label>
        Please enter your info:
        <br />
        <input type="text" name="name" placeholder="Name" onChange={props.onChange} required/>
        <br />
        <input type="email" name="email" placeholder="Email" onChange={props.onChange} required/>
        <br />
        <input type="password" name="password" placeholder="Password" onChange={props.onChange} required/>
      </label>
      <button type="button" name="checkout" className="checkout" onClick={props.onClick}>Form 1</button>
    </div>
  )
}

export default Form1;