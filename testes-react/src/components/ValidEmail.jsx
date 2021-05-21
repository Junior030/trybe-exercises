import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const emailValid = () => {
    const hstyle = { color: 'green' }
    return <span style= {hstyle}>Email Valido</span>;    
};

const emailInvalid = (email) => {
    if (email !== '') {
        const hstyle = { color: 'red' }
        return <span style= {hstyle}>Email Inválido</span>;
    }
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div id='div'>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3 data-testid="id-valid">{(verifyEmail(email) ? emailValid() : emailInvalid(email))}</h3>
    </div>
  );
};

export default ValidEmail;