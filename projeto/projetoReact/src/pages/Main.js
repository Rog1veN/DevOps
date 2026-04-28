import { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Importa a configuração que criamos
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import "../App.css"; // Mantém o estilo original

function Main() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Monitora se o usuário está logado
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Se estiver logado, busca os dados no Firestore usando o UID
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("Nenhum dado encontrado no Firestore!");
        }
      } else {
        // Se não estiver logado, redireciona para o Login
        navigate("/");
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Limpa o monitor ao sair da página
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (loading) {
    return <div className="App"><h3>Carregando dados...</h3></div>;
  }

  return (
    <div className="App">
      <div className="container-main">
        <h1>Bem-vindo à Área Principal</h1>
        
        {userData ? (
          <div className="user-info" style={{ textAlign: 'left', margin: '20px auto', maxWidth: '300px' }}>
            <p><strong>Nome:</strong> {userData.nome}</p>
            <p><strong>Sobrenome:</strong> {userData.sobrenome}</p>
            <p><strong>Data de Nascimento:</strong> {userData.dataNascimento}</p>
            <p><strong>E-mail:</strong> {userData.email}</p>
          </div>
        ) : (
          <p>Dados não encontrados.</p>
        )}

        <button onClick={handleLogout} style={{ backgroundColor: '#ff4b4b', marginTop: '20px' }}>
          Sair da Conta
        </button>
      </div>
    </div>
  );
}

export default Main;