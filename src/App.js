import { createContext, useContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { getRoutes } from "./navigation/routes";

import './App.css';

export const AuthContext = createContext(null);

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const routes = getRoutes(isAuth);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  );
}

export default App;
