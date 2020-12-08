import React from 'react'
import css from './RowHeading.module.scss'
import classnames from 'classnames'

const RowHeading = ({
  className,
  list = []
}) => {
  const items = list.map((item, index) => (
    <li className={css.item} key={`Table row#${index}`}>
      { item }
    </li>
  ))

  return list.length > 0
    ? (
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
    )
    : null
}

export default RowHeading
