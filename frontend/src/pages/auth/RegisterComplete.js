import React, { useState, useEffect } from "react"
import { auth } from "../../firebase"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import {createOrUpdateUser} from '../../functions/auth'


const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user } = useSelector((state)=>({...state}))

  let dispatch = useDispatch()

  useEffect(() => {
    setEmail(window.localStorage.getItem("registrationEmail"))
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    if(!email || !password){
      toast.error('Email and password is required')
      return
    }
    if(password.length < 6){
      toast.error('Try for at least 6 characters')
      return
    }
    try {
      const result = await auth.signInWithEmailLink(email, window.location.href)
      if (result.user.emailVerified) {
        window.localStorage.removeItem("registrationEmail")
        let user = auth.currentUser
        await user.updatePassword(password)
        const idTokenResult = await user.getIdTokenResult()
        console.log('user',user, 'token', idTokenResult)

      createOrUpdateUser(idTokenResult.token)
      .then((res)=> {
        dispatch({
          type: "USER_LOGGED_IN",
          payload: {
            name: res.data.name,
            email: res.data.email,
            res: res.data.role, 
            token: idTokenResult.token,
          },
        })
      })
      .catch()


        history.push('/')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const completeRegistrationForm = () => (
    <form onSubmit={submitHandler}>
      <input type="email" className="form-control" value={email} disabled />

      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Complete Registration
      </button>
    </form>
  )

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  )
}

export default RegisterComplete
