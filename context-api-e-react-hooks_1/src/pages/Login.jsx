import { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    }
  }

  saveChangeInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
      disabled: ((this.state.email !== '') && (this.state.password !== '')) ? false : true,
    })
    
  }

  render() {
    return (
      <div className="loginContainer">
        <form>
          <label htmlFor="email">
            Email: 
            <input type="email" id="email" onChange={this.saveChangeInput} />
          </label>
          <label htmlFor="password">
            Senha: 
            <input type="password" id="password" onChange={this.saveChangeInput} />
          </label>
          <Link to="/logout">
            <button type="button" onClick={this.logar} disabled={this.state.disabled}>OK</button>
          </Link>
        </form>
      </div>);
  }
}

export default Login;