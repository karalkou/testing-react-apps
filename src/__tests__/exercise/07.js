// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../components/theme'
import EasyButton from '../../components/easy-button'

function Wrapper(theme) {
  return ({ children }) => <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
}

test('renders with the light styles for the light theme', () => {
  render(<EasyButton />, { wrapper: Wrapper('light') })

  const button = screen.getByRole('button', { contents: /easy/i })

  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  const { rerender } = render(<EasyButton />, { wrapper: Wrapper('dark') });

  const button = screen.getByRole('button', { contents: /easy/i })

  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})

/* eslint no-unused-vars:0 */
