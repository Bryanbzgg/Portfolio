import { useState } from 'react'
import './App.css'
import Rodape from './Rodape/Rodape'
import Header from './header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />
      <div className="container">
        
        <img src="src/Components/img/download.jpg" alt="Foto de perfil" className="profile-photo" />
        <h1>EuRato</h1>
        <div className="social-links">
          <button onClick={() => window.open('https://www.linkedin.com/in/yourprofile', '_blank')}>LinkedIn</button>
          <button onClick={() => window.open('https://github.com/yourprofile', '_blank')}>GitHub</button>
          <button onClick={() => window.open('https://twitter.com/yourprofile', '_blank')}>Twitter</button>
        </div>
        <h2>Sobre Mim:</h2>
        <p>Sou um estudante de Ensino Médio tecnico integrado com programação, buscando expandir meus conhecimentos na área. Apaixonado por e-sports e ciclismo,<br/> acredito que a dedicação e a estratégia de jogos eletrônicos se refletem em minha abordagem para resolver problemas de forma criativa e eficiente.<br/> Estou focado em concluir meus estudos e seguir carreira como programador, aplicando habilidades de raciocínio lógico, trabalho em equipe e constante aprendizado.</p>
        <div className="tech-logos">
          <img src="src/Components/img/logo-javascript.svg" alt="JavaScript Logo" className="tech-logo" />
          <img src="src/Components/img/logo-css3.svg" alt="CSS Logo" className="tech-logo" />
          <img src="src/Components/img/logo-react.svg" alt="React Logo" className="tech-logo" />
        </div>
      </div>
      <Rodape />
    </>
  )
}

export default App