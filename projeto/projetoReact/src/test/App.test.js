import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login'; // Aponta para a pasta pages

test('Verifica se a tela de login renderiza os campos básicos', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  // Verifica se o título de login está na tela
  const titulo = screen.getByText(/Acesse sua Conta/i);
  expect(titulo).toBeInTheDocument();

  // Verifica se o campo de e-mail existe
  const inputEmail = screen.getByPlaceholderText(/Digite seu e-mail/i);
  expect(inputEmail).toBeInTheDocument();

  // Verifica se o botão de entrar existe
  const botao = screen.getByRole('button', { name: /Entrar na conta/i });
  expect(botao).toBeInTheDocument();
});