import { SyntaxTypes } from 'components/InputFormula/InputFormula'
import React from 'react'

export const debounce = func => {
  let lastTimeout = null

  return function () {
    const context = this
    const args = arguments

    if (lastTimeout) {
      clearTimeout(lastTimeout)
    }

    lastTimeout = setTimeout(function () {
      func.apply(context, args)
    }, 250)
  }
}

export const getRandomArrayElement = array => {
  return array[Math.floor(Math.random() * array.length)]
}

export const getRandomNumberInRange = (min, max) => min + Math.floor(Math.random() * (max - min + 1))

export const getRandomBoolean = () => Math.random() > 0.5;

export const shuffleArray = array => array.sort(() => Math.random() > 0.5)

export const addLeadingZero = number => number < 10 ? `0${number}` : `${number}`

export const getRandomDate = () => {
  const actualYear = (new Date()).getFullYear()
  const yearDiff = actualYear - 1970

  return new Date(1000 * 60 * 60 * 24 * getRandomNumberInRange(1, 365) * getRandomNumberInRange(1, yearDiff))
}

export const formatDate = timestamp => {
  const date = new Date(timestamp)

  const day = addLeadingZero(date.getDate())
  const month = addLeadingZero(date.getMonth() + 1)
  const year = date.getFullYear()

  const hours = addLeadingZero(date.getHours())
  const minutes = addLeadingZero(date.getMinutes())

  return {
    formattedDate: `${day}.${month}.${year}`,
    formattedTime: `${hours}:${minutes}`
  }
}

/**
 * Get a word declination according to counter value
 * @param {number} counter - a number, which requires a correct declination
 * @param {[string]} wordOptions - an array of possible word declinations
 * @returns {string} wordOptions[].calculatedIndex - the correct word from wordOptions array
 */
export const getWordDeclination = (counter, wordOptions = ['ордер', 'ордера', 'ордеров']) => {
  let result = ''
  const counterString = String(counter).split('')
  const lastDigit = counterString[counterString.length - 1]

  switch (lastDigit) {
    case '1':
      result = wordOptions[0]
      break
    case '2':
    case '3':
    case '4':
      result = wordOptions[1]
      break
    default:
      result = wordOptions[2]
  }

  return result
}

export const updateObject = (object, ...fields) => {
  return Object.assign({}, object, ...fields);
}

export const addFieldToAllObjects = (arrayOfObjects, requiredField) => {
  return arrayOfObjects.map(object => updateObject(object, requiredField))
}

export const checkIfObjectEmpty = obj => {
  let isEmpty = true

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      isEmpty = false
      break
    }
  }

  return isEmpty
}

export const addLayoutToFormula = formula => {
  let updatedFormula = formula || ''

  SyntaxTypes.GENERAL.forEach(item => {
    updatedFormula = updatedFormula.split(item).join(`"start span class "general"end"${item}"start span end"`)
  })

  updatedFormula = updatedFormula.replace(/"start span end"/g, `</span>`)
  updatedFormula = updatedFormula.replace(/"start span class "general"end"/g, `<span class="general">`)

  SyntaxTypes.OPERATORS.forEach(operator => {
    updatedFormula = updatedFormula.split(operator).join(`<span class="operators">${operator}</span>`)
  })

  return updatedFormula
}

export const renderRow = row => Object.values(row).map((item, key) => (
  <td key={`Fin Tool cell ${item}-${key}`} dangerouslySetInnerHTML={{ __html: item }} />
))
