import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <header className="containerInput">
        <input type="text" placeholder="Digite seu CEP" />
        <button type="button" className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </header>
      <main className="main">
        <h2>CEP: 09209-302</h2>
        <span>Rua: Rua Teste</span>
        <span>Complemento: Casa</span>
        <span>Bairro: Vila La ele</span>
        <span>Cidade/Estado: São Paulo - SP</span>
      </main>
    </div>
  );
}

export default App;
