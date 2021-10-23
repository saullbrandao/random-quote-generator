import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app with a quote, a image and a button', () => {
  render(<App />)

  const buttonEl = screen.getByRole('button')
  const textEl = screen.getByText(/random/i)
  const imageEl = screen.getByRole('img')

  expect(buttonEl).toBeInTheDocument()
  expect(imageEl).toBeInTheDocument()
  expect(textEl).toBeInTheDocument()
})
