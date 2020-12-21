import React, { useState } from "react"

const Register = () => {
  const [email, setEmail] = useState("")
  const submitHandler = () => {
    //
  }
  const registerForm = () => (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button type='submit' className='btn btn-raised'>Register</button>
    </form>
  )
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  )
}

export default Register
