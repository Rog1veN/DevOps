import { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      // 1. Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // 2. Salva os dados adicionais no Firestore usando o UID do Auth
      await setDoc(doc(db, "usuarios", user.uid), {
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        email: email,
        uid: user.uid
      });

      alert("Usuário cadastrado com sucesso!");
      navigate("/"); // Redireciona para o Login
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <div className="App">
      <h2>Criar Nova Conta</h2>
      <form onSubmit={handleCadastro}>
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} required />
        <input type="text" placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} required />
        <input type="date" placeholder="Data de Nascimento" onChange={(e) => setDataNascimento(e.target.value)} required />
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
        
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={() => navigate("/")}>Já tenho conta (Login)</button>
    </div>
  );
}

export default Cadastro;