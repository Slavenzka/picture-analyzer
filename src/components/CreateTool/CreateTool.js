import React, { useEffect } from 'react'
import ModalContentWrapper from 'components/ModalContentWrapper/ModalContentWrapper'
import { Controller, useForm } from 'react-hook-form'
import Fieldset from 'components/Fieldset/Fieldset'
import Label from 'components/Label/Label'
import Input from 'components/Input/Input'
import SelectStandard from 'components/SelectStandard/SelectStandard'
import { useDispatch } from 'react-redux'
import { toggleModalVisibility } from 'store/actions'

const InputLabels = {
  ISIN: {
    label: 'Введите ISIN',
    name: 'isin'
  },
  TICKER: {
    label: 'Название/тикер',
    name: 'symbol'
  },
  STOCK: {
    label: 'Биржа',
    name: 'exchange'
  },
  NAME: {
    label: 'Официальное название',
    name: 'officialName'
  },
  ID: {
    label: 'ID в HUGS',
    name: 'hugsId'
  },
  CATEGORY: {
    label: 'Категория',
    name: 'type',
    options: [
      {
        label: 'STOCK',
        value: 'STOCK'
      },
      {
        label: 'BOND',
        value: 'BOND'
      },
      {
        label: 'REAL_ESTATE',
        value: 'REAL_ESTATE'
      },
      {
        label: 'GLD',
        value: 'GLD'
      },
      {
        label: 'CASH',
        value: 'CASH'
      },
    ]
  },
  DESCRIPTION: {
    label: 'Описание ФИ для пользователей приложения',
    name: 'description'
  }
}

const CreateTool = ({ handleCreateTool, data = {}, isEdit }) => {
  const { register, control, handleSubmit, setValue } = useForm()
  const { symbol, isin, officialName, exchange, hugsId, type, description } = data
  const dispatch = useDispatch()

  useEffect(() => {
    isin && setValue(InputLabels.ISIN.name, isin)
    symbol && setValue(InputLabels.TICKER.name, symbol)
    exchange && setValue(InputLabels.STOCK.name, exchange)
    officialName && setValue(InputLabels.NAME.name, officialName)
    hugsId && setValue(InputLabels.ID.name, hugsId)
    type && setValue(InputLabels.CATEGORY.name, { label: type, value: type })
    description && setValue(InputLabels.DESCRIPTION.name, description)
  }, [])

  const handleCloseModal = () => {
    dispatch(toggleModalVisibility(null, false))
  }

  return (
    <ModalContentWrapper
      heading={`${isEdit ? 'Редактировать' : 'Добавить'} финансовый инструмент`}
      closeButtonHandler={handleCloseModal}
      onSubmit={handleSubmit(data => handleCreateTool(data, isEdit))}
    >
      <Fieldset>
        <Label label={InputLabels.ISIN.label} />
        <Input
          registerInForm={register}
          name={InputLabels.ISIN.name}
          id={InputLabels.ISIN.name}
          isDisabled={isEdit}
        />
      </Fieldset>
      <Fieldset columns={2}>
        <div>
          <Label label={InputLabels.TICKER.label} />
          <Input
            registerInForm={register}
            name={InputLabels.TICKER.name}
            id={InputLabels.TICKER.name}
            isDisabled={isEdit}
          />
        </div>
        <div>
          <Label label={InputLabels.STOCK.label} />
          <Input
            registerInForm={register}
            name={InputLabels.STOCK.name}
            id={InputLabels.STOCK.name}
            isDisabled={isEdit}
          />
        </div>
      </Fieldset>
      <Fieldset>
        <Label label={InputLabels.NAME.label} />
        <Input
          registerInForm={register}
          name={InputLabels.NAME.name}
          id={InputLabels.NAME.name}
        />
      </Fieldset>
      <Fieldset columns={2}>
        <div>
          <Label label={InputLabels.ID.label} />
          <Input
            registerInForm={register}
            name={InputLabels.ID.name}
            id={InputLabels.ID.name}
            isDisabled={isEdit}
          />
        </div>
        <div>
          <Label label={InputLabels.CATEGORY.label} />
          <Controller
            name={InputLabels.CATEGORY.name}
            as={SelectStandard}
            options={InputLabels.CATEGORY.options}
            defaultValue={InputLabels.CATEGORY.options[0]}
            control={control}
          />
        </div>
      </Fieldset>
      <Fieldset>
        <Label label={InputLabels.DESCRIPTION.label} />
        <Input
          registerInForm={register}
          name={InputLabels.DESCRIPTION.name}
          id={InputLabels.DESCRIPTION.name}
        />
      </Fieldset>
    </ModalContentWrapper>
  )
}

export default CreateTool
