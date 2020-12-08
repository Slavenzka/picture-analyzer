import React from 'react'
import { useForm } from 'react-hook-form'
import Acordeon from 'components/Acordeon/Acordeon'
import MathSymbol from 'components/MathSymbol/MathSymbol'
import Fieldset from 'components/Fieldset/Fieldset'
import Result from 'components/Result/Result'
import css from './FormTemplate.module.scss'
import Controls from 'components/Controls/Controls'
import classnames from 'classnames'
import { ButtonLabels } from 'utils/const'
import axiosHugs from 'axiosHugs'
import FormFields from 'components/FormFields/FormFields'

const FormTemplate = ({ acordeonObserver, className, formData }) => {
  const { register, handleSubmit, setValue, errors, reset } = useForm()
  const onSubmit = data => {
    const serverFormattedDate = data.date.split('.').reverse().join('-')
    const dataToBeSent = {
      ...data,
      date: serverFormattedDate
    }

    axiosHugs.post(formData.endpoint, dataToBeSent)
      .then(response => {
        console.log(response)
        resetForm()
      })
      .catch(error => console.log(error))
  }

  const { title, symbol, form, additional } = formData

  const resetForm = () => {
    const initialDataStructure = {}

    formData.form.forEach(item => {
      initialDataStructure[item.name] = item.value
    })

    reset({
      ...initialDataStructure
    }, {
      errors: false,
      dirtyFields: false,
      dirty: false,
      isSubmitted: false,
      touched: false,
      isValid: false,
      submitCount: false,
    })
  }

  return (
    <Acordeon
      className={className}
      label={title}
      observer={acordeonObserver}
      mathSymbol={symbol && symbol.base && <MathSymbol base={symbol.base} lower={symbol.lower} power={symbol.power} />}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset columns={3}>
          <Result
            className='secondColumn'
            lastUpdateTimestamp={new Date().getTime()}
            result='0.0678'
          />
        </Fieldset>
        <div className={css.fieldsWrapper}>
          <FormFields
            data={form}
            title={title}
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>
        {additional &&
          <>
            <Fieldset columns={3}>
              <p className={classnames(css.additional, 'secondColumn')}>
                Дополнительные поля
              </p>
            </Fieldset>
            <div className={classnames(css.fieldsWrapper, css.fieldsWrapperAdditional)}>
              <FormFields
                data={additional}
                title={title}
                register={register}
                errors={errors}
                setValue={setValue}
              />
            </div>
          </>
        }
        <Fieldset columns={3}>
          <Controls
            className={classnames('secondColumn', 'formControls')}
            submitLabel={ButtonLabels.SUBMIT}
            resetLabel={ButtonLabels.RESET}
            resetHandler={resetForm}
          />
        </Fieldset>
      </form>
    </Acordeon>
  )
}

export default FormTemplate
