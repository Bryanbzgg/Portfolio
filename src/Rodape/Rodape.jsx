import React from 'react'
import './Rodape.css'

function Rodape() {
  return (
    <footer>
      <p>Feito com ❤️ por <a href="https://github.com/Bryanbzgg" target="_blank" rel="noopener noreferrer" className='nome'>EuRato</a></p>
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="src/Components/img/linkdin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Bryanbzgg" target="_blank" rel="noopener noreferrer">
          <img src="src/Components/img/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="src/Components/img/logo-instagram (1).svg" alt="Instagram" />
        </a>
      </div>
    </footer>
  )
}

export default Rodape