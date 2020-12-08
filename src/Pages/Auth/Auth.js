import React from 'react'
import css from './Auth.module.scss'
import Container from 'components/Grid/Container'
import { useForm } from 'react-hook-form'
import Input from 'components/Input/Input'
import Heading from 'components/Heading/Heading'
import Button from 'components/Button/Button'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { SETUP } from 'Pages/Routes'

const Auth = ({ history }) => {
  const { register, handleSubmit, errors } = useForm()
  const isRequiredError = Object.values(errors).filter(item => item.type === 'required').length > 0
  const isIncorrect = Object.values(errors).filter(item => item.type === 'isIncorrect').length > 0

  const submitForm = () => {
    history.push({
      pathname: SETUP
    })
  }

  console.log(errors)

  return (
    <Container className={css.container}>
      <div className={css.wrapper}>
        <Heading
          label='Picture analyzer'
          className={css.heading}
        />
        <form onSubmit={handleSubmit(submitForm)}>
          <Input
            className={css.input}
            registerInForm={register({
              required: true,
              validate: {
                isIncorrect: value => value === process.env.REACT_APP_LOGIN
              }
            })}
            name='analyzer-auth-login'
            placeholder='Введите логин'
          />
          <Input
            className={css.input}
            registerInForm={register({
              required: true,
              validate: {
                isIncorrect: value => value === process.env.REACT_APP_PASSWORD
              }
            })}
            name='analyzer-auth-password'
            placeholder='Введите пароль'
            type='password'
          />
          <Button
            className={css.button}
            label='Authorize'
            buttonType='submit'
          />
          {isRequiredError &&
            <ErrorMessage
              className={css.error}
              label='Пожалуйста, заполните все поля'
            />
          }
          {isIncorrect &&
            <ErrorMessage
              className={css.error}
              label='Пожалуйста, проверьте правильность введенных данных авторизации'
            />
          }
        </form>
      </div>
    </Container>
  )
}

export default Auth
