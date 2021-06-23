import React, { useContext } from 'react';
import MyContext from '../context/MyContext';


function Cadastro () {
	const { addUsuario } = useContext(MyContext);
	return (
		<div className="cadastroContainer">
			<form>
				<label htmlFor="nome">
					Nome:
					<input
						type="text"
						id="nome" 
						onChange={ ({ target }) => addUsuario({[target.id]: target.value}) }
					/>
				</label>
				<label htmlFor="email">
					Email:
					<input
						type="email"
						id="email"
						onChange={ ({ target }) => addUsuario({[target.id]: target.value}) }
					/>
				</label>
				<label htmlFor="senha">
					Senha: 
					<input
						type="password"
						onChange={ ({ target }) => addUsuario({[target.id]: target.value}) }
						id="senha"
					/>
				</label>
			</form>
		</div>
	);
}

export default Cadastro;