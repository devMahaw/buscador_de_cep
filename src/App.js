import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
import api from "./services/api"

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json/`);
      setCep(response.data);
      setInput("");

    } catch {
      alert("ERRO!");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <header className="containerInput">
        <input type="text" placeholder="Digite seu CEP"
          value={input} onChange={(event) => setInput(event.target.value)} />
        <button type="button" className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </header>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade/Estado: {cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
