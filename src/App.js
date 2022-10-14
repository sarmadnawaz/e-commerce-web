import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Directory from './components/directory/Directory.component';
import Navigation from './routes/navigation/Navigation.component';
import Authentication from './routes/authentication/Authentication.component';
import Shop from './routes/shop/Shop.component';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Navigation />,
    children : [
      {
        path : '/',
        element : <Directory />
      },
      {
        path : 'auth',
        element : <Authentication />
      },
      {
        path : 'shop',
        element : <Shop />
      },
      {
        path : '*',
        element : <h1>Page Not Found 404!</h1>
      } 
    ]
  }
])
function App() {
  
  return (
      <RouterProvider router={router} />
  );
}

export default App;
