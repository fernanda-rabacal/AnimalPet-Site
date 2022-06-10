import "./style.css"
import {Header} from '../../components/Nav'
import Whatsapp from '../../assets/whatsapp.svg'
import DogCat from '../../assets/dog-cat-puppy-kitten.png'

export function Home(){


  return(
    <div className='home-container'>
      <Header/>

      <div className='home-wrapper'>
      <h1 className="home-title">ANIMAL PET</h1>
            <h4 className="home-h4">Cuidado completo com o seu animalzinho</h4>
            <p className="home-content">
              A Animal Pet possui uma estrutura completa para cuidar do seu pet, desde consultório veterinário, área de banho e tosa, além de acessórios e rações da maior qualidade! Estamos abertos de segunda a sabado, das 8hrs às 18hrs
            </p>
            <button className='home-button'>
            <img src={Whatsapp} alt='whatsapp logo'/>
             <p>Agende agora Sua tosa</p>
            </button>
            <img className="home-img" src={DogCat} alt="two cats and two dogs" />
            <section className="stats">
            <div className="stat">
              <h3>+2.500</h3>
              <p>Clientes</p>
            </div><div className="stat">
              <h3>+2.500</h3>
              <p>Clientes</p>
            </div><div className="stat">
              <h3>+2.500</h3>
              <p>Clientes</p>
            </div>
            </section>
      </div>
    </div>
  )

}