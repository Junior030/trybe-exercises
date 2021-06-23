import { Component } from 'react';
import MyContext from '../components/MyContext';

class Cadastro extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
		<div className="cadastroContainer">
			<form>
				<label htmlFor="nome">
					Nome:
					<input type="text" id="nome" />
				</label>
				<label htmlFor="email">
					Email:
					<input type="email" id="email" />
				</label>
				<label htmlFor="senha">
					Senha: 
					<input type="password" id="senha" />
				</label>
			</form>
		</div>);
	}
}

export default Cadastro;