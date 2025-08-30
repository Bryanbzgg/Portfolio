
import './App.css'
import Rodape from './Rodape/Rodape'
import Header from './header/Header'

function App() {

  return (
    <>
  <Header />
      <div className="container">
        
        <img src="src/Components/img/imgPerfill.jpg" alt="Foto de perfil" className="profile-photo" />
        <h1>Bryan</h1>
        <div className="social-links">
   
          <button onClick={() => window.open('https://github.com/Bryanbzgg', '_blank')}>Projetos</button>
          <button
  onClick={() => window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=bryanmfusco@gmail.com&su=Olá&body=Quero%20entrar%20em%20contato%20com%20você!',
    '_blank'
  )}
  style={{
    padding:'12px 24px',
    backgroundColor:'#37cbf0ff',
    color:'white',
    border:'none',
    borderRadius:'8px',
    fontWeight:'bold',
    fontFamily:'sans-serif',
    cursor:'pointer'
  }}
>
  Fale comigo
</button>


        </div>
        <h2>Sobre Mim:</h2>
        <p>Sou um estudante de Ensino Médio técnico integrado com programação, apaixonado por tecnologia, inteligência artificial e desenvolvimento web. Fascinado por e-sports e ciclismo, aplico a mesma dedicação e estratégia dos jogos eletrônicos na resolução criativa de problemas. Estou focado em expandir meus conhecimentos em front-end e web design, buscando criar experiências digitais modernas e funcionais, enquanto desenvolvo minhas habilidades em lógica, design e inovação contínua.</p>
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