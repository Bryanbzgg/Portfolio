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
      </div>
      <Rodape />
    </>
  )
}

export default App