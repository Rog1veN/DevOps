import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Verifica se o botão de entrar está na tela', () => {
  render(<App />);
  const botao = screen.getByRole('button', { name: /entrar na conta/i });
  expect(botao).toBeInTheDocument(); // O nosso "assert"
});

test('Verifica se o input de usuário existe', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/digite seu usuário/i);
  expect(input).toBeInTheDocument();
});