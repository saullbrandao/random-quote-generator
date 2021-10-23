import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { getQuote } from './quotesService'

const response = { quote: 'testing', speaker: 'test' }

const server = setupServer(
  rest.get('http://api.quotable.io/random', (req, res, ctx) => {
    return res(ctx.json(response))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('transform json response into object', async () => {
  const quote = await getQuote()
  expect(quote).toStrictEqual(response)
})
