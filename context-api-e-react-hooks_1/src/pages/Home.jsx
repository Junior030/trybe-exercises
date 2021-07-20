import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
  return (
    <div className="homeContainer">
      <Link to="/login">Login</Link>
			<Link to="/cadastro">Cadastro</Link>
    </div>
  );
}

export default Home;
