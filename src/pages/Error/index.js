import {Header} from '../../components/Nav';
import './style.css'

export function Error(){

  return(
    <div>
      <Header/>
      <div className="err-404" >
      <h1 >404</h1>
      <h4 className="error-title">Página não encontrada</h4>
    <p>OOPS! Parece que esta página não existe...  
    </p>
      </div>
    </div>
  )

}