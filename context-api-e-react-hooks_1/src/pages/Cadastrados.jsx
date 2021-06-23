import React from 'react';
// import MyContext from '../context/MyContext';

function Cadastrados () {
  return (
    <div className="cadastradosContainer">
        {/* <MyContext.Consumer>
          {
            value => (
              value.BDcadastro.map((pessoa, index) => {
                return (
                  <div key={index}>
                    <p>{pessoa.nome}</p>
                    <p>{pessoa.email}</p>
                  </div>
                );
              })
            )
          }
        </MyContext.Consumer> */}
    </div>
  );
}
 
export default Cadastrados;