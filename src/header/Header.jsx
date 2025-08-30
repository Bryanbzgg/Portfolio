import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <img src="src/Components/img/Logo EuRato.png" alt="Logo" className="logo" />
      <h1 className="title">Portfólio</h1>
     <button
  onClick={() => window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=bryanmfusco@gmail.com&su=Olá&body=Quero%20entrar%20em%20contato%20com%20você!',
    '_blank'
  )}
  style={{
    padding:'12px 24px',
    
    color:'white',
    border:'none',
    borderRadius:'8px',
    fontWeight:'bold',
    fontFamily:'sans-serif',
    cursor:'pointer'
  }}
>
  Contato
</button>

    </header>
    
  )
}

export default Header