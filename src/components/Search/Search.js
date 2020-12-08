import React from 'react'
import css from './Search.module.scss'
import IconSearch from 'assets/icons/IconSearch'
import classnames from 'classnames'

const Search = ({
  className,
  name,
  placeholder = 'Поиск по обозначению',
  register
}) => {
  return (
    <div className={classnames(css.searchWrapper, className)}>
      <IconSearch className={css.iconSearch} />
      <input
        className={css.search}
        name={name}
        type='text'
        placeholder={placeholder}
        ref={register}
      />
    </div>
  )
}

export default Search
