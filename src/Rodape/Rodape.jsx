import React from 'react'
import './Rodape.css'

function Rodape() {
  return (
    <footer>
      <p>Feito com ❤️ por <a href="https://github.com/Bryanbzgg" target="_blank" rel="noopener noreferrer" className='nome'>Bryan</a></p>
      <div className="social-icons">
        
        <a href="https://github.com/Bryanbzgg" target="_blank" rel="noopener noreferrer">
          <img src="src/Components/img/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/bryanz_bzgg" target="_blank" rel="noopener noreferrer">
          <img src="src/Components/img/logo-instagram (1).svg" alt="Instagram" />
        </a>
      </div>
    </footer>
  )
}

export default Rodape