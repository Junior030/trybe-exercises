import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import './App.css';
import Conteudo from './pages/Conteudo';
import MyContext from './components/MyContext';
import Cadastrados from './pages/Cadastrados';


function App() {
  const contexValue = {
    BDcadastro: [{nome: 'Junior', email: 'juniorhenrique030@gmail.com', senha: '123456' }],
  }
  return (
    <div className="App">
      <MyContext.Provider value={ contexValue }>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Conteudo} />
            <Route path='/cadastrados' component={Cadastrados} />
          </Switch>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
