import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <img src="path/to/your/logo.png" alt="Logo" className="logo" />
      <h1 className="title">Meu Portfólio</h1>
      <button className="learn-more" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Saiba Mais</button>
    </header>
    
  )
}

export default Header