import React, { useEffect, useState } from 'react'
import css from './CreateFormula.module.scss'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import SelectStandard from 'components/SelectStandard/SelectStandard'
import Label from 'components/Label/Label'
import Button from 'components/Button/Button'
import { ButtonPalettes, ButtonTypes } from 'utils/const'
import axiosHugs from 'axiosHugs'
import { useDispatch } from 'react-redux'
import { toggleModalVisibility } from 'store/actions'
import Input from 'components/Input/Input'

const ElementLabels = {
  TOOLS: {
    label: 'Финансовый инструмент',
    name: 'create-formula-tool'
  },
  STRATEGIES: {
    label: 'Стратегия',
    name: 'create-formula-strategy'
  },
  TYPE: {
    label: 'Тип формулы (пропорция или ребаланс)',
    name: 'create-formula-type',
  },
  FORMULA: {
    label: 'Введите формулу',
    name: 'create-formula-value'
  },
  NAME: {
    label: 'Название переменной в конструкторе',
    name: 'create-variable-name',
  },
  FORMAT: {
    label: 'Формат переменной',
    name: 'create-variable-format'
  },
  INITIAL: {
    label: 'Значение переменной',
    name: 'create-variable-initial-value'
  },
  DATE: {
    label: 'Дата значения переменной',
    name: 'create-variable-initial-date'
  },
  DESCRIPTION: {
    label: 'Описание переменной',
    name: 'create-variable-description',
  }
}

const selectFormulas = [
  { value: '/formula/saveStrategySnapshotFinToolFormula', label: 'Формула пропорции' },
  { value: '/formula/saveStrategyRebalanceFinToolFormula', label: 'Формула ребаланса' },
]

const CreateFormula = ({
  onCreate,
  defaultFormulaType = 'snapshot',
  defaultValue,
  strategyName,
  isEdit
}) => {
  const defaultType = defaultFormulaType === 'snapshot' ? selectFormulas[0] : selectFormulas[1]
  const { register, control, handleSubmit, watch } = useForm()
  const dispatch = useDispatch()
  const [finTools, updateFinTools] = useState(null)
  const [strategies, updateStrategies] = useState(null)
  const onSubmit = data => handleFormSubmit(data)

  useEffect(() => {
    if (!finTools) {
      axiosHugs.post('/fintool/findAll')
        .then(response => {
          const fetchedData = response?.data?.result?.content

          if (fetchedData) {
            console.log(fetchedData)
            const list = fetchedData.map(({ symbol, isin }) => ({
              label: symbol,
              value: symbol,
              isin
            }))
            updateFinTools(list)
          }
        })
    }
  }, [finTools])

  useEffect(() => {
    if (!strategies) {
      axiosHugs.post(`/strategy/findAllStrategies`)
        .then(response => {
          const fetchedData = response?.data?.result

          if (fetchedData) {
            const list = fetchedData.map(({strategyName, ...item}) => ({
              ...item,
              strategyName,
              label: strategyName,
              value: strategyName
            }))
            updateStrategies(list)
          }
        })
    }
  }, [strategies])

  if (!strategies || strategies.length === 0) return null
  const defaultStrategy = isEdit
    ? strategies.find(el => el.strategyName === strategyName)
    : strategies[0]

  const selectedStrategy = watch(ElementLabels.STRATEGIES.name, defaultStrategy)
  console.log(defaultStrategy)
  console.log(selectedStrategy)
  console.log(strategies)
  const selectedStrategyTools = selectedStrategy.finToolProportions.map(({finTool, ...item}) => ({
    ...item,
    finTool,
    label: finTool.symbol,
    value: finTool.symbol
  }))

  const closeModal = () => dispatch(toggleModalVisibility(null, false))

  const handleFormSubmit = data => {
    console.log(data)
    const dataToBeSent = {
      finToolIsin: data[ElementLabels.TOOLS.name].finTool.isin,
      formula: data[ElementLabels.FORMULA.name],
      strategyName: strategyName || data[ElementLabels.STRATEGIES.name].value
    }
    const apiUrl = data[ElementLabels.TYPE.name].value

    axiosHugs.post(apiUrl, dataToBeSent)
      .then(response => {
        console.log(response)
        onCreate && onCreate()
        closeModal()
      })
  }

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>
        {isEdit ? `Редактировать формулу` : `Добавить новую формулу`}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={classnames(css.fieldset, css.twoColumns)}>
          <div>
            <Label className={css.label} label={ElementLabels.TOOLS.label} />
            <Controller
              name={ElementLabels.TOOLS.name}
              as={SelectStandard}
              options={selectedStrategyTools}
              defaultValue={selectedStrategyTools[0]}
              control={control}
            />
          </div>
          <div>
            <Label className={css.label} label={ElementLabels.STRATEGIES.label} />
            <Controller
              as={SelectStandard}
              control={control}
              name={ElementLabels.STRATEGIES.name}
              defaultValue={isEdit
                ? selectedStrategy
                : strategies[0]
              }
              options={strategies || []}
              isDisabled={isEdit}
            />
          </div>
        </fieldset>
        <fieldset className={css.fieldset}>
          <Label className={css.label} label={ElementLabels.TYPE.label} />
          <Controller
            name={ElementLabels.TYPE.name}
            as={SelectStandard}
            options={selectFormulas}
            defaultValue={defaultType}
            control={control}
          />
        </fieldset>
        <fieldset className={css.fieldset}>
          <Label className={css.label} label={ElementLabels.FORMULA.label} />
          <Input
            registerInForm={register}
            name={ElementLabels.FORMULA.name}
            id={ElementLabels.FORMULA.name}
            type='textarea'
            rows='10'
            defaultValue={defaultValue}
          />
        </fieldset>
        <div className={css.controls}>
          <Button
            className={css.button}
            label='Отменить'
            onClick={() => closeModal()}
            palette={ButtonPalettes.DARK}
          />
          <Button
            className={css.button}
            label='Сохранить'
            buttonType={ButtonTypes.SUBMIT}
          />
        </div>
      </form>
    </div>
  )
}

export default CreateFormula
