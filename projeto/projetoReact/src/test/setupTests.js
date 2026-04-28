// Importa matchers personalizados para o Jest (como o toBeInTheDocument)
import '@testing-library/jest-dom';

// Como o Firebase usa algumas funções que o ambiente de teste não tem (como o TextEncoder),
// se o seu teste reclamar de "TextEncoder is not defined", adicione estas linhas:
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;