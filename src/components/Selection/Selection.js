import React, { useEffect } from 'react'
import css from './Selection.module.scss'
import classnames from 'classnames'
import IconClose from 'assets/icons/IconClose'
import { useDispatch } from 'react-redux'
import { saveFinTools, toggleModalVisibility } from 'store/actions'
import FinToolSelection from 'containers/FinToolSelection/FinToolSelection'
import Button from 'components/Button/Button'
import { ButtonTypes } from 'utils/const'

const Selection = ({
  className,
  label,
  name,
  register,
  finTools,
  remove,
  add,
  setValue
}) => {
  const dispatch = useDispatch()
  const selectedTools = finTools.filter(item => item.checked).length > 0
    ? finTools.filter(item => item.checked)
    : ''

  useEffect(() => {
    setValue(name, selectedTools)
  }, [selectedTools, name, setValue])

  const handleAddItems = () => {
    dispatch(toggleModalVisibility(
      <FinToolSelection
        remove={remove}
        add={add}
      />,
      true
    ))
  }

  const removeItem = (item, array) => {
    const copyArray = [...array]
    const itemIndex = copyArray.findIndex(arrayItem => arrayItem.full === item)
    copyArray[itemIndex].checked = false
    remove(item)
    dispatch(saveFinTools(copyArray))
  }

  const selectedItems = finTools
    .filter(item => item.checked)
    .map(({ full: result }, index) => (
      <div className={css.result} key={`Selected item#${index}`}>
        <span className={css.resultLabel}>
          { result }
        </span>
        <button
          className={css.buttonRemove}
          type='button'
          onClick={() => removeItem(result, finTools)}
        >
          Удалить из списка
          <IconClose className={css.iconClose} />
        </button>
      </div>
  ))

  return (
    <div className={classnames(className, css.wrapper)}>
      <span className={css.label}>
        { label }
      </span>
      <input
        className='visuallyHidden'
        type="text"
        name={name}
        value={selectedTools}
        ref={register}
        disabled
      />
      <div className={css.selection}>
        { selectedItems }
        <Button
          className={css.addTrigger}
          label='+ добавить'
          onClick={() => handleAddItems()}
          buttonType={ButtonTypes.ADD}
        />
      </div>
    </div>
  )
}

export default Selection
