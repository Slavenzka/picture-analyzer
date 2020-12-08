import React from 'react'
import css from './Result.module.scss'
import classnames from 'classnames'
import Input from 'components/Input/Input'
import { InputStyles } from 'utils/const'
import { formatDate } from 'utils'

const Result = ({
  className,
  lastUpdateTimestamp,
  result
}) => {
  return (
    <div className={classnames(css.wrapper, className)}>
      <p className={css.label}>
        Результат
        <span className={css.date}>
          { `Обновлено: ${formatDate(lastUpdateTimestamp).formattedDate}` }
        </span>
      </p>
      <Input defaultValue={result} isDisabled={true} style={InputStyles.RESULT} />
    </div>
  )
}

export default Result
