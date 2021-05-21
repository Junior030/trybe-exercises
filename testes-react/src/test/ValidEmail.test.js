import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

describe('Testando possiveis casos de', () => {
    it('Testando um componente, caso o email seja valido.', () => {
        const EMAIL_USER = 'email@email.com';
        const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
        const isValid = getByText('Email Valido');
        expect(isValid).toBeInTheDocument();
    });

    it('Testando um componente, caso o email seja inválido.', () => {
        const EMAIL_USER = 'emailerrado';
        const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
        const isValid = getByText('Email Inválido');
        expect(isValid).toBeInTheDocument();
    });

    it('Testando se nenhum email foi add', () => {
        const EMAIL_USER = '';
        const { getByTestId } = render(<ValidEmail email={EMAIL_USER}/>);
        const h3 = getByTestId('id-valid');
        expect(h3.value).toHaveValue(undefined);
        expect(h3).toBeInTheDocument();
    })
});