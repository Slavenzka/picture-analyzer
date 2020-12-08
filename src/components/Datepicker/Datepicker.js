import React, { useEffect, useRef, useState } from 'react'
import css from './Datepicker.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
// datepicker stuff
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { formatDate } from 'utils'
import Input from 'components/Input/Input'
import IconCalendar from 'assets/icons/IconCalendar'

const Datepicker = ({
  className,
  id,
  name,
  register,
  setValue,
  isFutureDisabled
}) => {
  const localization = {
    locale: 'ru',
    weekdaysShort: [
      'ВСК',
      'ПНД',
      'ВТР',
      'СРД',
      'ЧТВ',
      'ПТН',
      'СБТ'
    ],
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  }

  const [calendarData, updateCalendarData] = useState({
    from: null,
    indicated: formatDate(new Date().getTime()).formattedDate
  })
  const [isCalendarOpen, setCalendarOpen] = useState(false)
  const calendarWrapperRef = useRef(null)

  useEffect(() => {
    setValue(name, calendarData.indicated)
  }, [calendarData.indicated, name, setValue])

  const handleDayClick = day => {
    updateCalendarData(state => ({
      ...state,
      from: day,
    }))
  }

  const handleResetClick = () => {
    updateCalendarData({
      from: null,
      indicated: formatDate(new Date().getTime()).formattedDate
    })
  }

  const handleCloseCalendar = () => {
    setCalendarOpen(false)
  }

  const handleFilterReset = () => {
    handleResetClick()
  }

  useEffect(() => {
    const handleClickOutside = evt => {
      if (!calendarWrapperRef.current.contains(evt.target)) {
        handleCloseCalendar()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const { from } = calendarData
  const modifiers = { start: from }
  const selectedDays = [ from ]

  return (
    <div className={classnames(css.wrapper, className)} ref={calendarWrapperRef}>
      <div className={css.input} onClick={() => {
        setCalendarOpen(!isCalendarOpen)
      }}>
        <Input
          id={id}
          name={name}
          registerInForm={register}
          placeholder='Выберите дату'
          defaultValue={calendarData.indicated}
          isDisabled={true}
        />
        <IconCalendar className={css.iconCalendar} />
      </div>
      {isCalendarOpen &&
        <div className={css.content}>
          <DayPicker
            className={css.datepicker}
            numberOfMonths={1}
            selectedDays={selectedDays}
            modifiers={modifiers}
            disabledDays={{ after: isFutureDisabled ? new Date() : null }}
            onDayClick={handleDayClick}
            locale={localization.locale}
            weekdaysShort={localization.weekdaysShort}
            months={localization.months}
            firstDayOfWeek={1}
          />
          <div className={css.controls}>
            <button
              className={classnames(css.btnControl, css.btnControlApply)}
              onClick={() => {
                updateCalendarData(state => {
                  return {
                    ...state,
                    indicated: formatDate(state.from).formattedDate
                  }
                })
                handleCloseCalendar()
              }}
            >
              Применить
            </button>
            <button
              className={classnames(css.btnControl, css.btnControlReset)}
              onClick={() => {
                handleFilterReset()
                handleCloseCalendar()
              }}
            >
              Отменить
            </button>
          </div>
        </div>
      }
    </div>
  )
}

Datepicker.propTypes = {
  className: PropTypes.string
}

export default React.memo(Datepicker)
