import React, { useEffect, useState } from 'react'
import css from './CreateVariable.module.scss'
import { useForm, Controller } from 'react-hook-form'
import SelectStandard from 'components/SelectStandard/SelectStandard'
import Label from 'components/Label/Label'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import { ButtonPalettes, ButtonTypes } from 'utils/const'
import axiosHugs from 'axiosHugs'
import { useDispatch } from 'react-redux'
import { toggleModalVisibility } from 'store/actions'
import Datepicker from 'components/Datepicker/Datepicker'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'

const ElementLabels = {
  TYPE: {
    label: 'Тип переменной',
    name: 'create-variable-type',
  },
  NAME: {
    label: 'Название переменной в конструкторе',
    name: 'create-variable-name',
  },
  FORMULA: {
    label: 'Формула промежуточной переменной',
    name: 'create-variable-formula'
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

const selectOptions = [
  { value: '/variable/saveVariable', label: 'Начальная переменная' },
  { value: '/variable/saveCalculatedVariable', label: 'Промежуточная переменная' },
]

const selectFormats = [
  { value: '/variable/saveVariable', label: 'Значение' },
  { value: '/variable/saveVariableWithDate', label: 'Значение + дата' },
]

const CreateVariable = ({
  initialName = '',
  onCreate,
  defaultVariableType = 'simple',
  defaultValue,
  defaultDescription,
  isEdit,
  isDate
}) => {
  const { register, control, handleSubmit, watch, setValue, errors } = useForm({
    defaultValues: {
      [ElementLabels.FORMAT.name]: isDate ? selectFormats[1] : selectFormats[0]
    }
  })
  const defaultType = defaultVariableType === 'calculated' ? selectOptions[1] : selectOptions[0]
  const type = watch(ElementLabels.TYPE.name) || defaultType
  const format = watch(ElementLabels.FORMAT.name)
  const dispatch = useDispatch()
  const [variables, updateVariables] = useState(null)
  const onSubmit = data => handleFormSubmit(data)

  useEffect(() => {
    axiosHugs.post('/variable/findAllVariables')
      .then(response => {
        updateVariables(response.data.result || [])
      })
  }, [dispatch])

  const closeModal = () => dispatch(toggleModalVisibility(null, false))

  const handleFormSubmit = data => {
    if (type.label === selectOptions[1].label) {
      const dataToBeSent = {
        formula: data[ElementLabels.INITIAL.name],
        name: data[ElementLabels.NAME.name],
        description: data[ElementLabels.DESCRIPTION.name]
      }

      axiosHugs.post(type.value, dataToBeSent)
        .then(response => {
          console.log(response)
          onCreate && onCreate()
          closeModal()
        })
    }
    if (type.label === selectOptions[0].label && format.label === selectFormats[0].label) {
      const dataToBeSent = {
        description: data[ElementLabels.DESCRIPTION.name],
        name: data[ElementLabels.NAME.name],
        value: data[ElementLabels.INITIAL.name]
      }

      axiosHugs.post(format.value, dataToBeSent)
        .then(response => {
          console.log(response)
          onCreate && onCreate()
          closeModal()
        })
    }
    if (type.label === selectOptions[0].label && format.label === selectFormats[1].label) {
      const dataToBeSent = {
        date: data[ElementLabels.DATE.name].split('.').reverse().join('-'),
        description: data[ElementLabels.DESCRIPTION.name],
        name: data[ElementLabels.NAME.name],
        value: data[ElementLabels.INITIAL.name]
      }

      console.log(dataToBeSent)

      axiosHugs.post(format.value, dataToBeSent)
        .then(response => {
          console.log(response)
          onCreate && onCreate()
          closeModal()
        })
    }
  }

  const inputValue = (
    <fieldset className={css.fieldsetValue}>
      <Label
        className={css.label}
        label={ElementLabels.INITIAL.label}
        id={ElementLabels.INITIAL.name}
      />
      <Input
        id={ElementLabels.INITIAL.name}
        name={ElementLabels.INITIAL.name}
        defaultValue={defaultValue || watch(ElementLabels.INITIAL.name)}
        registerInForm={register({
          required: true,
          validate: {
            isNumeric: value => !isNaN(value) || `Значением начальной переменной может быть только число`,
            isLimited: value => {
              if (`${value % 1}`.length > 18) {
                return 'Вводите не более 16 знаков после запятой во избежание потери точности'
              }
              return true
            }
          }
        })}
      />
      {errors[ElementLabels.INITIAL.name] &&
      <ErrorMessage
        className={css.error}
        label={errors[ElementLabels.INITIAL.name].message}
      />
      }
    </fieldset>
  )

  const contentInitial = (
    <fieldset className={css.fieldset}>
      <Label className={css.label} label={ElementLabels.FORMAT.label} />
      <Controller
        name={ElementLabels.FORMAT.name}
        as={SelectStandard}
        options={selectFormats}
        defaultValue={selectFormats[0]}
        control={control}
      />
      {format && format.label === selectFormats[0].label && inputValue}
      {format && format.label === selectFormats[1].label &&
        <div className={css.twoColumns}>
          { inputValue }
          <fieldset className={css.fieldsetInner}>
            <Label
              className={css.label}
              label={ElementLabels.DATE.label}
              id={ElementLabels.DATE.name}
            />
            <Datepicker
              id={ElementLabels.DATE.name}
              name={ElementLabels.DATE.name}
              register={register}
              setValue={setValue}
              isFutureDisabled
            />
          </fieldset>
        </div>
      }
    </fieldset>
  )

  const contentCalculated = (
    <fieldset className={css.fieldset}>
      <Label
        className={css.label}
        label={ElementLabels.FORMULA.label}
        id={ElementLabels.INITIAL.name}
      />
      <Input
        id={ElementLabels.INITIAL.name}
        name={ElementLabels.INITIAL.name}
        defaultValue={defaultValue || watch(ElementLabels.INITIAL.name)}
        registerInForm={register({
          required: true,
        })}
      />
    </fieldset>
  )

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>
        {isEdit ? `Редактировать` : `Создать новую переменную`}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={css.fieldset}>
          <Label className={css.label} label={ElementLabels.TYPE.label} />
          <Controller
            name={ElementLabels.TYPE.name}
            as={SelectStandard}
            options={selectOptions}
            defaultValue={defaultType}
            control={control}
          />
        </fieldset>
        <fieldset className={css.fieldset}>
          <Label
            className={css.label}
            label={ElementLabels.NAME.label}
            id={ElementLabels.NAME.name}
          />
          <Input
            id={ElementLabels.NAME.name}
            name={ElementLabels.NAME.name}
            registerInForm={register({
              required: 'Пожалуйста, введите уникальный идентификатор переменной',
              pattern: {
                value: /^[a-z0-9]+$/i,
                message: 'В имени переменной допускаются только латинские буквы и цифры'
              },
              validate: {
                isNotNumeric: value => isNaN(value) || `Имя переменной не может содержать только цифры`,
                isNotExisting: value => isEdit || (variables.indexOf(value) === -1 || `Переменная с таким уже именем уже существует`)
              }
            })}
            defaultValue={initialName}
          />
          {errors[ElementLabels.NAME.name] &&
            <ErrorMessage
              className={css.error}
              label={errors[ElementLabels.NAME.name].message}
            />
          }
        </fieldset>
        {type && type.label === selectOptions[0].label && contentInitial}
        {type && type.label === selectOptions[1].label && contentCalculated}
        <fieldset className={css.fieldset}>
          <Label
            className={css.label}
            label={ElementLabels.DESCRIPTION.label}
            id={ElementLabels.DESCRIPTION.name}
          />
          <Input
            id={ElementLabels.DESCRIPTION.name}
            name={ElementLabels.DESCRIPTION.name}
            defaultValue={defaultDescription}
            registerInForm={register}
          />
          {(errors[ElementLabels.DESCRIPTION.name] || errors[ElementLabels.FORMULA.name]) &&
            <ErrorMessage
              className={css.error}
              label='Пожалуйста, заполните все обязательные поля'
            />
          }
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

export default CreateVariable
