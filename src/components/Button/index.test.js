import { render, screen } from '@testing-library/react'
import { Button } from '.'

test('render button with text', () => {
  render(<Button>Test</Button>)
  const buttonEl = screen.getByText(/test/i)

  expect(buttonEl).toBeInTheDocument()
})
