import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import './App.css';
import Conteudo from './pages/Conteudo';
import MyProvider from './context/MyProvider';
import Cadastrados from './pages/Cadastrados';


function App() {
  return (
    <div className="App">
      <MyProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Conteudo} />
            <Route path='/cadastrados' component={Cadastrados} />
          </Switch>
        </Router>
      </MyProvider>
    </div>
  );
}

export default App;
