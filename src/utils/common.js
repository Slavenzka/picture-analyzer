import { SPECIAL_SYMBOLS } from 'utils/const'

export const debounce = func => {
  let lastTimeout = null

  return function () {
    const args = arguments

    if (lastTimeout) {
      clearTimeout(lastTimeout)
    }

    lastTimeout = setTimeout(() => {
      func.apply(null, args)
    }, 1000)
  }
}

export const getVariablesInFormula = (formula, variables) => {
  console.log(variables)
  const requiredVariables = {}
  let formulaArray = formula

  SPECIAL_SYMBOLS.forEach(symbol => formulaArray = formulaArray.split(symbol).join(' '))
  formulaArray = formulaArray
    .split(' ')
    .map(item => item.toUpperCase()).filter(item => item !== '')

  Object.keys(variables).forEach(type => {
    requiredVariables[type] = variables[type] ? variables[type].filter(item => formulaArray.indexOf(`${(item.name).toUpperCase()}`) !== -1) : []
  })

  return requiredVariables
}
