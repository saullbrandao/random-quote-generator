import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

const response = { author: 'test speaker', content: 'test quote' }

const server = setupServer(
  rest.get('http://api.quotable.io/random', (req, res, ctx) => {
    return res(ctx.json(response))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders the app with a quote, a image and a button', () => {
  render(<App />)

  const buttonEl = screen.getByRole('button')
  const textEl = screen.getByText(/loading quote/i)
  const imageEl = screen.getByRole('img')

  expect(buttonEl).toBeInTheDocument()
  expect(imageEl).toBeInTheDocument()
  expect(textEl).toBeInTheDocument()
})

test("calls api on startup and renders it's response", async () => {
  render(<App />)

  const quoteEl = await screen.findByText(/test quote/i)

  expect(quoteEl).toBeInTheDocument()
})

test('calls api on button click and update its text', async () => {
  render(<App />)

  const customResponse = { author: 'test speaker', content: 'test quote' }
  server.use(
    rest.get('http://api.quotable.io/random', (req, res, ctx) => {
      return res(ctx.json(customResponse))
    }),
  )

  const buttonEl = screen.getByRole('button')

  fireEvent.click(buttonEl)

  const quoteEl = await screen.findByText(/test quote/i)

  expect(quoteEl).toBeInTheDocument()
})
