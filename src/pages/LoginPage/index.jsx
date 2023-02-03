import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormSchema } from '../../constants/formLoginSchema';
import './LoginPage.scss'

const initialFormValue = {
  username: '',
  password: ''
}

const LoginPage = () => {
  const navigate = useNavigate()
  const methods = useForm({
    defaultValues: initialFormValue,
    resolver: yupResolver(loginFormSchema)
  })
  const { control, handleSubmit, formState: { errors } } = methods

  console.log(errors, 'errors');

  const onValid = (values) => {
    console.log(values);
    // Check dieu kien login
    // VD: username = admin,
    // Pass = admin
    navigate('/')
  }

  return (
    <div className='login-wrapper'>
      <form onSubmit={handleSubmit(onValid)} className='login-form'>
        <label>Username: </label>
        <Controller
          name='username'
          control={control}
          render={({ field: { value, onChange } }) => (
            <input
              value={value}
              onChange={onChange}
              type={"text"}
              placeholder="username"
            />
          )}
        />
        {!!errors.username && <span className='error-message'>
          {errors.username.message}
        </span>}
        <label>Password: </label>
        <Controller
          name='password'
          control={control}
          render={({ field: { value, onChange } }) => (
            <input
              value={value}
              onChange={onChange}
              type={"password"}
              placeholder="Password"
            />
          )}
        />
        {!!errors.password && <span className='error-message'>
          {errors.password.message}
        </span>}
        <button type='submit'>Submit</button>
        <div className='login-form__link'>
          <Link to='/login-layout/register'>You don't have account?</Link>
        </div>
      </form>

    </div >
  )
}

export default LoginPage
