import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [user, setUser] = useState({});

  const addUsuario = ({ target }) => {
    const newUser = {...user, [target.id]: target.value}
    setUser(newUser);
  }

  return (
    <main>
      <MyContext.Provider value={{ cadastrados, addUsuario }}>
        {children}
      </MyContext.Provider>
    </main>
  )
}

export default MyProvider;