import React from 'react'
import css from './MathSymbol.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const MathSymbol = ({
  base,
  className,
  lower,
  power
}) => (
  <span className={classnames(css.wrapper, className)}>
    { base }
    {power && <span className={css.power}>
      { power }
    </span>
    }
    {lower && <span className={css.lower}>
      { lower }
    </span>
    }
  </span>
)

MathSymbol.propTypes = {
  base: PropTypes.string.isRequired,
  className: PropTypes.string,
  lower: PropTypes.string,
  power: PropTypes.string,
}

export default MathSymbol
