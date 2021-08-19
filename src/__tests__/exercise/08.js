// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

const TestComp = () => {
  const { count, increment, decrement } = useCounter()
  return (
    <div>
      <span>{`Count is: ${count}`}</span>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>)
}

test('exposes the count and increment/decrement functions', () => {
  // 🐨 render the component
  render(<TestComp />)
  // 🐨 get the elements you need using screen
  const countContainer = screen.getByText(/count is/i)
  const incrementBtn = screen.getByText('increment')
  const decrementBtn = screen.getByText('decrement')

  expect(countContainer).toHaveTextContent('Count is: 0')

  userEvent.click(incrementBtn)
  expect(countContainer).toHaveTextContent('Count is: 1')

  userEvent.click(decrementBtn)
  expect(countContainer).toHaveTextContent('Count is: 0')
})

/* eslint no-unused-vars:0 */
