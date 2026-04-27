// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './src/App';

test('deve validar o fluxo de login do Igor', () => {
  render(<App />);

  // 1. Procura os campos que você criou no componente
  const inputUsuario = screen.getByPlaceholderText(/Digite seu usuário/i);
  const botaoEntrar = screen.getByText(/Entrar na conta/i);

  // 2. Simula o usuário digitando o e-mail correto
  fireEvent.change(inputUsuario, { target: { value: 'igor.pacievitch@gmail.com' } });

  // 3. Simula o clique
  fireEvent.click(botaoEntrar);

  // 4. Verifica se a mensagem de erro/sucesso apareceu (baseado na sua lógica)
  const mensagem = screen.getByText(/Usuário ou senha incorretos!/i); 
  expect(mensagem).toBeInTheDocument();
});