import { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
    <div className="homeContainer">
      <Link to="/login">Login</Link>
			<Link to="/cadastro">Cadastro</Link>
    </div>);
  }
}

export default Home;
