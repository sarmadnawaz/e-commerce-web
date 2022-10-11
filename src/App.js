import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Directory from './components/directory/Directory.component';
import Navigation from './routes/navigation/Navigation.component';
import Authentication from './routes/authentication/Authentication.component';


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
        path : 'about',
        element : <h1>About Page</h1>
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
