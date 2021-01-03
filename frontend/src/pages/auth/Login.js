import React, { useState, useEffect } from "react"
import { auth, googleAuthProvider } from "../../firebase"
import { toast } from "react-toastify"
import { Button } from "antd"
import { MailOutlined, GoogleOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import axios from 'axios'

const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create-or-update-user`, 
    {}, 
    {
    headers : {
      authtoken
    }
  })
}

const Login = ({ history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("123456")
  const [loading, setLoading] = useState(false)

  const { user } = useSelector((state)=>({...state}))

  useEffect(()=>{
    if(user && user.token) history.push('/')
  },[user])

  let dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await auth.signInWithEmailAndPassword(email, password)
      const { user } = result
      const idTokenResult = await user.getIdTokenResult()

      createOrUpdateUser(idTokenResult.token)
      .then((res)=> {
        console.log('CREATE OR UPDATE RESPONSE', res)
      })
      .catch()


      // dispatch({
      //   type: "USER_LOGGED_IN",
      //   payload: {
      //     email: user.email,
      //     token: idTokenResult.token,
      //   },
      // })
      // history.push("/")
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      setLoading(false)
    }
  }

  const googleLogin = async () => {
    auth.signInWithPopup(googleAuthProvider)
    .then(async(result)=>{
      const { user } = result
      const idTokenResult = await user.getIdTokenResult()
      dispatch({
        type: "USER_LOGGED_IN",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      })
      history.push("/")
    })
    .catch((err)=>{
      console.log(err)
      toast.error(err.message)
    })
  }

  const loginForm = () => (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          autoFocus
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
      </div>

      <br />
      <Button
        onClick={submitHandler}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  )

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Login</h4>
          )}
          {loginForm()}

          <Button
        onClick={googleLogin}
        type="danger"
        className="mb-3"
        block
        shape="round"
        icon={<GoogleOutlined />}
        size="large"
      >
        Login with Google
      </Button>

      <Link to='/forgot/password' className='float-right text-danger' >Forgot Password?</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
