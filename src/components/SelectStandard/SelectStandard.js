import React from 'react'
import css from './SelectStandard.module.scss'
import Select from 'react-select'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import classnames from 'classnames'

const SelectStandard = ({
  className,
  onChange,
  onBlur,
  value,
  options,
  defaultValue,
  label = '',
  isDisabled,
  isError,
  type = 'standard',
  id,
  name
}) => {
  // You need react-select@3.0.4 to make it "see" simplebar. Does not work on newer versions of
  // react-select
  const renderScrollbar = props => {
    return (
      <SimpleBar style={{ maxHeight: '20rem' }} autoHide={false}>{props.children}</SimpleBar>
    )
  }

  const formatOptionLabel = ({ value, label }) => (
      <div className={classnames(css.status, css[`status-${value.toLowerCase()}`])}>
        {label}
      </div>
  )

  const colourStyles = {
    control: (styles, { selectProps, isFocused }) => ({
      ...styles,
      borderColor: selectProps.menuIsOpen || isFocused ? 'rgb(65, 96, 79)' : 'rgba(233, 233, 233, 0.1)',
      borderRadius: '0.2rem',
      borderBottomRightRadius: selectProps.menuIsOpen ? 0 : '0.2rem',
      borderBottomLeftRadius: selectProps.menuIsOpen ? 0 : '0.2rem',
      backgroundColor: isDisabled ? 'transparent' : 'transparent',
      boxShadow: 'none'
    }),
    menu: (styles, { selectProps }) => ({
      ...styles,
      marginTop: 0,
      marginBottom: 0,
      borderRadius: '0',
      border: `0.1rem solid rgb(65, 96, 79)`,
      borderTop: 'none',
      boxShadow: 'none',
      backgroundColor: 'rgb(24, 24, 24)'
    }),
    dropdownIndicator: (styles, { selectProps }) => {
      return {
        ...styles,
        display: isDisabled ? 'none' : 'block',
        transition: 'all 0.3s',
        transform: `rotate(${selectProps.menuIsOpen ? 180 : 0}deg)`
      }
    },
    option: styles => ({
      ...styles,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 2.1rem',
      height: '5rem'
    }),
  };

  return (
    <div className={className} id={id}>
      {label &&
        <p className={css.label}>
          {label}
        </p>
      }
      <Select
        options={options}
        defaultValue={defaultValue || undefined}
        isSearchable={false}
        className={classnames(css.select, { [css.selectError]: isError })}
        classNamePrefix="select"
        components={{ MenuList: renderScrollbar }}
        styles={colourStyles}
        placeholder='Выбрать'
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        isDisabled={isDisabled}
        formatOptionLabel={type === 'status' ? formatOptionLabel : undefined}
        name={name || ''}
      />
    </div>
  )
}

export default SelectStandard
