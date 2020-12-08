import React, { useEffect, useRef, useState } from 'react'
import css from './InputFormula.module.scss'
import classnames from 'classnames'
import Input from 'components/Input/Input'
import IconArrowAcordeon from 'assets/icons/IconArrowAcordeon'
import { getText } from 'utils/forms'
import { useDispatch, useSelector } from 'react-redux'
import ContextMenu from 'components/ContextMenu/ContextMenu'
import { addLayoutToFormula } from 'utils'

export const SyntaxTypes = {
  GENERAL: [ '>', '<', '/', '=', '+', '-', '*', '^', '(', ')', ';', ':', '[', ']', '>=', '<='],
  OPERATORS: ['IF', 'OR', 'AND', 'ABS', 'SQRT', 'MIN', 'MAX', 'SUM', 'AVERAGE']

}

const InputFormula = ({
  availableFormulas,
  name,
  register,
  setValue,
  getValues,
  trigger,
}) => {
  const [isListVisible, updateListVisibility] = useState(false)
  const [contextMenuStatus, updateContextMenuVisibility] = useState({
    isOpened: false,
    x: null,
    y: null,
    variables: [],
  })
  const [selectedText, updateSelectedText] = useState('')
  const inputRef = useRef(null)
  const formulaListRef = useRef(null)
  const buttonRef = useRef(null)
  const dispatch = useDispatch()
  const allVariables = useSelector(state => state.data.variables)

  const createFormulaListRef = node => formulaListRef.current = node
  const createButtonRef = node => buttonRef.current = node

  const createInputRef = node => {
    register(node)
    inputRef.current = node
  }

  const handleClickOutside = (evt) => {
    if (formulaListRef.current && !formulaListRef.current.contains(evt.target) && !buttonRef.current.contains(evt.target)) {
      updateListVisibility(false)
    }
  }

  const handleClickFormula = (value) => {
    setValue(name, value)
    console.log('trigger')
    trigger()
    updateListVisibility(false)
  }

  const closeContextMenu = () => {
    updateContextMenuVisibility(state => ({
      ...state,
      isOpened: false
    }))
  }

  const handleClickExistingVariable = variable => {
    const nameArray = name.split('.')
    const currentInputValue = getValues()[nameArray[0]][nameArray[1]]
    const indexOfSelectedSubstring = currentInputValue.indexOf(selectedText)
    const newInputValue = currentInputValue.slice(0, indexOfSelectedSubstring).concat(variable, currentInputValue.slice(indexOfSelectedSubstring + selectedText.length))

    setValue(name, newInputValue)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [isListVisible])

  useEffect(() => {
    const handleRightClick = evt => {
      evt.preventDefault()
      const text = getText(document.activeElement)
      updateSelectedText(text)
      let containsSystemSymbol = false

      // Object.values(SyntaxTypes).forEach(type => {
      //   type.forEach(symbol => {
      //     if (text.indexOf(symbol) !== -1
      //       || text.indexOf(' ') !== -1
      //       || allVariables.indexOf(text) !== -1
      //       || !isNaN(text)) {
      //       containsSystemSymbol = true
      //     }
      //   })
      // })

      if (!containsSystemSymbol && text.length > 0) {
        const matchingVariables = allVariables.filter(variable => {
          return variable[0] === text[0] || variable[0] === text[0].toUpperCase()
        })

        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

        updateContextMenuVisibility({
          isOpened: true,
          x: evt.clientX,
          y: evt.clientY + scrollPosition,
          variables: [...matchingVariables]
        })
      }
    }

    inputRef.current && inputRef.current.addEventListener('contextmenu', handleRightClick)

    return () => inputRef.current.removeEventListener('contextmenu', handleRightClick)
  }, [allVariables, dispatch])

  const items = availableFormulas.map((item, index) => {
    let content = addLayoutToFormula(item)

    return (
      <li
        className={css.item}
        key={`Formula ${index}`}
        dangerouslySetInnerHTML={{ __html: content }}
        onClick={() => handleClickFormula(item)}
      />
    )
  })

  return (
    <>
      <div className={css.wrapper}>
        <Input
          className={css.input}
          placeholder={'Введите формулу или выберите из выпадающего списка'}
          registerInForm={createInputRef}
          name={name}
        />
        {availableFormulas.length > 0 &&
          <button
            className={classnames(css.button, {
              [css.buttonOpened]: isListVisible
            })}
            type='button'
            onClick={() => updateListVisibility(!isListVisible)}
            ref={createButtonRef}
          >
            <IconArrowAcordeon className={css.icon} />
            Управление выпадающим списком
          </button>
        }
        {availableFormulas.length > 0 && isListVisible &&
          <ul className={css.list} ref={createFormulaListRef}>
            { items }
          </ul>
        }
      </div>
      <ContextMenu
        {...contextMenuStatus}
        handleClickExistingVariable={handleClickExistingVariable}
        closeMenu={closeContextMenu}
        selectedText={selectedText}
      />
    </>
  )
}

export default InputFormula
