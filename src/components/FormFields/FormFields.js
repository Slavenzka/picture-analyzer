import React from 'react'
import Fieldset from 'components/Fieldset/Fieldset'
import Label from 'components/Label/Label'
import Input from 'components/Input/Input'
import Datepicker from 'components/Datepicker/Datepicker'
import MathSymbol from 'components/MathSymbol/MathSymbol'
import { numericValidation } from 'utils/forms'

const FormFields = ({ data, title, register, errors, setValue }) => {
  return data && data.length > 0
    ? data.map((element, elIndex) => (
      <Fieldset columns={3} key={`${title} ${elIndex}`}>
        <Label label={element.label} id={element.id} />
        {element.type === 'input' &&
        <Input
          registerInForm={register(numericValidation)}
          name={element.id}
          id={element.id}
          isError={errors[element.id]}
        />
        }
        {element.type === 'datepicker' &&
        <Datepicker
          register={register}
          name={element.name}
          id={element.id}
          setValue={setValue}
        />
        }
        {element.symbol &&
        <div>
          <MathSymbol
            base={element.symbol.base}
            power={element.symbol.power}
            lower={element.symbol.lower}
          />
        </div>}
      </Fieldset>
    ))
    : null
}

export default FormFields
