// form testing
// http://localhost:3000/login

import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const usernameTest = 'chucknorris'
  const passwordTest = 'i need no password'

  const userNameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)
  const submitBtn = screen.getByRole('button', { name: /submit/i })

  userEvent.type(userNameField, usernameTest)
  userEvent.type(passwordField, passwordTest)
  userEvent.click(submitBtn)

  expect(handleSubmit).toHaveBeenCalledWith({
    username: usernameTest,
    password: passwordTest,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})
