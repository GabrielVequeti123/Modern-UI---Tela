import './App.css'
import ReactLogo from './assets/user.png'
import Audio from './assets/audio.png'
import Ler from './assets/leitura.jfif'
import Fala from './assets/falar.png'
import Duo from './assets/lingoduo.png'

import Casa from './assets/casa.png'
import Pasta from './assets/pasta.png'
import Perfil from './assets/perfil.png'

import Reino from './assets/reino.png'
import Japão from './assets/japão.png'
import França from './assets/frança.png'

import China from './assets/china.png'
import Italy from './assets/italy.png'
import Spain from './assets/spain.png'

export default function App() {
  

  return (
    <>
      <main>
        <img src={ReactLogo} alt="" />
        <img className='duo' src={Duo} alt="" />
        <header>
          
          <h1>Aprende novos idiomas <br /> com o Lingoduo</h1>
          <h2>O futuro te espera</h2>
          <button>Começar a Aprender</button>

        </header>

        <section>
          

          
            <input className='pesquisa' type="text" placeholder="O que você quer pesquisar?" />
            
          


         
            <h1 className='titulo'>Escolha como estudar</h1>
          
          <img className='imagem-audio' src={Audio} alt="" />
          <img className='imagem-ler' src= {Ler} alt="" />
            <img className='imagem-falar' src= {Fala} alt="" />


            <h1 className='idiomas'> Escolha os idiomas</h1>


              <img className='reino' src= {Reino} alt="" />
              <img className='japão' src= {Japão} alt="" />
              <img className='frança' src= {França} alt="" />

              <img className='china' src= {China} alt="" />
              <img className='italy' src= {Italy} alt="" />
              <img className='spain' src= {Spain} alt="" />


          </section>

        <footer>

         
              <img className='casa' src= {Casa} alt="" />
              <img className='pasta' src= {Pasta} alt="" />
              <img className='perfil' src= {Perfil} alt="" />
              
          

        </footer>
      </main>
    </>
  )
}
