import { useState } from 'react'
import styled from 'styled-components'
import socratesImg from '../assets/images/socrates.png'
import { Quotes } from '../components/Quotes'
import { getQuote } from '../services/quotesService'

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocratesImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`

function App() {
  const [quote, setQuote] = useState({
    quote: 'ok',
    speaker: 'random',
  })

  const onUpdate = async () => {
    const resQuote = await getQuote()
    const newQuote = {
      quote: resQuote.content,
      speaker: resQuote.author,
    }
    setQuote(newQuote)
  }

  return (
    <Content className="App">
      <Quotes {...quote} handleClick={onUpdate} />
      <SocratesImg src={socratesImg} alt="Socrates" />
    </Content>
  )
}

export default App
