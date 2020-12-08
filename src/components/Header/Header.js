import React from 'react'
import css from './Header.module.scss'
import classnames from 'classnames'
import Logo from 'components/Logo/Logo'
import Container from 'components/Grid/Container'
import { ContainerTypes } from 'utils/const'
import LinkBack from 'components/LinkBack/LinkBack'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { RoutesWithBackHomeLink } from 'Pages/Routes'

const Header = ({ className, location }) => {
  return (
    <header className={css.header}>
      <Container className={classnames(css.wrapper, className)} type={ContainerTypes.OUTER}>
        <Logo />
        {RoutesWithBackHomeLink.indexOf(location.pathname) !== -1 && <LinkBack />}
      </Container>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default withRouter(Header)
