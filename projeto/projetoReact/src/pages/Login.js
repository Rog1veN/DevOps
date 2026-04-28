import { useState } from 'react';
import { auth } from '../firebaseConfig'; // Sua config do Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import "../App.css"; // Mantendo seu CSS original

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Validação Real no Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      
      // Se der certo, navega para a página Principal (Main)
      navigate("/main");
    } catch (error) {
      // Se os dados estiverem incorretos ou usuário não existir
      setMensagem("Usuário não cadastrado ou senha incorreta!");
      console.error("Erro no login:", error.code);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <h2>Acesse sua Conta</h2>
        
        <div>
          <label>E-mail</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Digite seu e-mail'
            required
          />
        </div>

        <div>
          <label>Senha</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Digite sua senha'
            required
          />
        </div>
// trigger deploy v2
        <button type="submit">Entrar na conta</button>
        
        {/* Mensagem de erro caso a validação falhe */}
        {mensagem && <p style={{ color: 'red' }}>{mensagem}</p>}
      </form>

      {/* Botão extra para ir para o cadastro conforme a lógica de navegação */}
      <div style={{ marginTop: '20px' }}>
        <p>Ainda não tem uma conta?</p>
        <button onClick={() => navigate("/cadastro")}>Criar nova conta</button>
      </div>
    </div>
  );
}

export default Login;