// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import { render as rtlRender, screen } from '@testing-library/react'
import { ThemeProvider } from '../../components/theme'
import EasyButton from '../../components/easy-button'

function render(ui, { theme = 'light', ...options } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider value={[theme, () => {}]}>{children}</ThemeProvider>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

test('renders with the light styles for the light theme', () => {
  render(<EasyButton />)

  const button = screen.getByRole('button', { contents: /easy/i })

  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  render(<EasyButton />, { theme: 'dark' })

  const button = screen.getByRole('button', { contents: /easy/i })

  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})

/* eslint no-unused-vars:0 */
