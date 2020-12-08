import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from 'Pages/Auth/Auth'
import Setup from 'Pages/Setup/Setup'

export const SETUP = '/setup'
export const AUTH = '/auth'

// TODO apply async import of page components to split the initial chunk

const Routes = () => {
  return (
    <Switch>
      <Route exact path={AUTH} component={Auth} />
      <Route exact path={SETUP} component={Setup} />
    </Switch>
  )
}

export default Routes
