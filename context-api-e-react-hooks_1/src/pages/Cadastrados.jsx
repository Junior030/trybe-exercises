import React from 'react';
import MyContext from '../components/MyContext';

class Cadastrados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="cadastradosContainer">
          <MyContext.Consumer>
            {
              value => {
                console.log(value);
              }
            }
          </MyContext.Consumer>
      </div>
    );
  }
}
 
export default Cadastrados;