import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../pages/Login';
import '@testing-library/jest-dom';

// Mock do react-router
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock do Firebase
const mockSignIn = jest.fn();
jest.mock('../firebaseConfig', () => ({
  auth: {},
}));

describe('Login', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renderiza os campos básicos', () => {
    render(<Login />);

    expect(screen.getByText(/Acesse sua Conta/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite seu e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite sua senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar na conta/i })).toBeInTheDocument();
  });

  test('mostra erro quando login falha', async () => {
    mockSignIn.mockRejectedValueOnce({ code: 'auth/error' });

    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/Digite seu e-mail/i), {
      target: { value: 'errado@email.com' },
    });

    fireEvent.change(screen.getByPlaceholderText(/Digite sua senha/i), {
      target: { value: 'errado' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Entrar na conta/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Usuário não cadastrado ou senha incorreta!/i)
      ).toBeInTheDocument();
    });
  });

});