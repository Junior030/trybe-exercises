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
						onChange={ addUsuario }
					/>
				</label>
				<label htmlFor="email">
					Email:
					<input
						type="email"
						id="email"
						onChange={ addUsuario }
					/>
				</label>
				<label htmlFor="senha">
					Senha: 
					<input
						type="password"
						onChange={ addUsuario }
						id="senha"
					/>
				</label>
			</form>
		</div>
	);
}

export default Cadastro;