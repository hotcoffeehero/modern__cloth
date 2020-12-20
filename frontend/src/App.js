import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./screens/Home"
import Register from "./screens/auth/Register"
import Login from "./screens/auth/Login"
import DevFlow from "./screens/DevFlow"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Header /> 
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/devflow" component={DevFlow} />
      </Switch>
    </>
  )
}

export default App
