import React, { useState } from "react"
import { auth } from '../../firebase.js'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [email, setEmail] = useState("")
  const submitHandler = async (e) => {
    e.preventDefault()
    //this comes from the firebase docs
    const config = {
        url: 'http://localhost:3000/register/complete',
        handleCodeInApp: true
    }
    await auth.sendSignInLinkToEmail(email, config)
    toast.success(`We sent a link to ${email}. Check your inbox.`)
    window.localStorage.setItem('registerEmail', email)
    setEmail('')
  }
  const registerForm = () => (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      ></input>
      <button type='submit' className='btn btn-raised my-2'>Register</button>
    </form>
  )
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          
          {registerForm()}
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Register

//firebase signin docs
// https://firebase.google.com/docs/auth/web/email-link-auth
