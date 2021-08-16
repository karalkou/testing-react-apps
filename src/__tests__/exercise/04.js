// form testing
// http://localhost:3000/login

import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

const buildLoginForm = () => ({ username: faker.internet.userName(), password: faker.internet.password() })

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const { username: usernameTest, password: passwordTest } = buildLoginForm()

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
