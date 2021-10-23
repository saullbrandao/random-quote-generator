import { render, screen } from '@testing-library/react'
import { Quote } from '.'

const quote = 'test quote'
const speaker = 'random speaker'

test('renders received quote, speaker and a button', () => {
  render(<Quote quote={quote} speaker={speaker} />)
  const quoteEl = screen.getByText(quote)
  const speakerEl = screen.getByText(`- ${speaker}`)
  const buttonEl = screen.getByRole('button')

  expect(quoteEl).toBeInTheDocument()
  expect(speakerEl).toBeInTheDocument()
  expect(buttonEl).toBeInTheDocument()
})
