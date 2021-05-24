import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Teste de aplicação de piadas', () => {
  const { getByRole } = render( <App /> );
  it('Teste se renderiza div na tela', () => {
    const div = getByRole('contentinfo', )
  });
});
