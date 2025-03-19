import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <img src="src/Components/img/Logo EuRato.png" alt="Logo" className="logo" />
      <h1 className="title">Portfólio</h1>
      <button className='learn-more' onClick={() => window.open('https://wa.me/5523423451234?text=Bom%20Dia%2C%20gostaria%20de%20Falar%20com%20Voc%C3%AA%20sobre%20seu%20Portf%C3%B3lio!', '_blank')}>Contato</button>
      
    </header>
    
  )
}

export default Header