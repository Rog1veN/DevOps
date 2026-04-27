import { useState } from 'react';
import "./App.css";

const ValidarCredenciais = (email, senha) => {
  if (email !== "igor.pacievitch@gmail.com" || senha !== "123456") {
    return "Usuário ou senha incorretos!";
  }

  return "Autenticado com sucesso!"
}

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [validacao, setValidacao] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const validacaoTexto = ValidarCredenciais(user, password);
    setValidacao(validacaoTexto);
    setUser("");
    setPassword("");
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuário</label>
          <input type="text" value={user} onChange={handleUserChange} placeholder='Digite seu usuário'/>
        </div>

        <div>
          <label>Senha</label>
          <input type="text" value={password} onChange={handlePasswordChange} placeholder='Digite sua senha'/>
        </div>

        <button type="submit">Entrar na conta</button>
        <p>{validacao}</p>
      </form>
    </div>
  );
}

export default App;