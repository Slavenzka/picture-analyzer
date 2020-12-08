import React, { useEffect } from 'react'
import ElasticAdaptive from 'hoc/ElasticAdaptive'
import Routes, { AUTH } from 'Pages/Routes'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'


const App = ({ history }) => {
  const isAuthenticated = useSelector(state => state.auth.isUserAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      history.push({
        pathname: AUTH
      })
    }
  }, [isAuthenticated, history])

  return (
    <ElasticAdaptive>
      <main>
        <Routes />
      </main>
    </ElasticAdaptive>
  )
}

export default withRouter(App)
