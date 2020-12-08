import React from 'react'
import css from './RowVariable.module.scss'
import classnames from 'classnames'
import IconEdit from 'assets/icons/IconEdit'

const RowVariable = ({
  isOdd,
  renderRow,
  isEditable,
  onVariableChange,
  rowClass,
}) => {
  const renderEditButton = () => (
    <td className={classnames(css.editable)}>
      <button
        className={css.button}
        onClick={onVariableChange}
        type='button'
      >
        Редактировать
        <IconEdit className={css.icon} />
      </button>
    </td>
  )

  return (
    <tr
      className={classnames(css.row, rowClass, {
        [css.rowOdd]: isOdd,
        [css.rowEditable]: isEditable
      })}
    >
      { renderRow() }
      { isEditable && renderEditButton() }
    </tr>
  )
}

export default RowVariable
