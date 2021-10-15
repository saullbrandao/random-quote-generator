import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app', () => {
  render(<App />)
  const text = screen.getByText(/Hello World/i)
  expect(text).toBeInTheDocument()
})
