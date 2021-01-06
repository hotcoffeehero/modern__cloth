import React from "react"
import { Route, Link } from "react-router-dom"
//We need to access the redux state, because we need to access the user
//If we have the user we can render the children props or we can
//redirect away.
import { useSelector } from "react-redux"
import LoadingToRedirect from "./LoadingToRedirect"

const UserRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }))

  return user && user.token ? (
    <Route {...rest} render={() => children} />
  ) : (
    <LoadingToRedirect />
  )
}

export default UserRoute
