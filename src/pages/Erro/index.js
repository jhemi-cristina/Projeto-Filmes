import {Link} from 'react-router-dom';
import './erro.css';

export default function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1><br/>
      <h2>Pagina Não encontrada!</h2>
      <Link to="/" >Veja todos os nossos filmes!</Link>
    </div>
  );
 }