import { useEffect, useRef, useState } from 'react'
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
  const isMounted = useRef(true)
  const [quote, setQuote] = useState({
    quote: 'Loading quote...',
    speaker: 'Loading speaker...',
  })

  const onUpdate = async () => {
    const resQuote = await getQuote()
    if (isMounted.current) {
      const newQuote = {
        quote: resQuote.content,
        speaker: resQuote.author,
      }
      setQuote(newQuote)
    }
  }

  useEffect(() => {
    onUpdate()

    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <Content className="App">
      <Quotes {...quote} handleClick={onUpdate} />
      <SocratesImg src={socratesImg} alt="Socrates" />
    </Content>
  )
}

export default App
