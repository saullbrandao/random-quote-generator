import styled from 'styled-components'
import { Button } from '../Button'

const Quote = styled.p`
  font-size: 2rem;
  margin: 0;
`
const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export function Quotes({ quote, speaker, handleClick }) {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={handleClick}>New Quote</Button>
    </Wrapper>
  )
}
