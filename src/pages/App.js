import styled from 'styled-components'
import socratesImg from '../assets/images/socrates.png'
import { Quote } from '../components/Quote'
import './App.css'

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
  return (
    <Content className="App">
      <Quote quote="ok" speaker="random" />
      <SocratesImg src={socratesImg} alt="Socrates" />
    </Content>
  )
}

export default App
