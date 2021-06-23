import React from 'react';
// import { Link } from 'react-router-dom';

function Login () {
  
  return (
    <div className="loginContainer">
      <form>
        <label htmlFor="email">
          Email: 
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          Senha: 
          <input type="password" id="password" />
        </label>
        <button type="button">OK</button>
      </form>
    </div>
  );
}

export default Login;