import React from 'react'
import css from './ContentStructure.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Container from 'components/Grid/Container'
import { ActionButtonTypes, ContainerTypes } from 'utils/const'
import Heading from 'components/Heading/Heading'
import LinkLog from 'components/LinkLog/LinkLog'
import { withRouter } from 'react-router-dom'
import { RoutesWithBackHomeLink } from 'Pages/Routes'
import Backlink from 'components/Backlink/Backlink'

const ContentStructure = ({
  actionButton,
  className,
  contentClass,
  children,
  heading,
  location,
}) => {
  let button

  switch (actionButton) {
    case ActionButtonTypes.LOG:
      button = <LinkLog className={css.log} />
      break
    default:
      button = null
      break
  }

  return (
    <section className={css.wrapper}>
      <Container
        className={classnames(css.container, className)}
        type={ContainerTypes.INNER}
      >
        <Heading
          className={css.heading}
          label={heading}
        />
        { actionButton && button }
        {RoutesWithBackHomeLink.indexOf(location.pathname) === -1 &&
          <Backlink className={css.backlink} />
        }
        <div className={classnames(css.content, contentClass)}>
          { children }
        </div>
      </Container>
    </section>
  )
}

ContentStructure.propTypes = {
  button: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.string,
}

export default withRouter(ContentStructure)
