import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Directory from './components/directory/Directory.component';
import Navigation from './routes/navigation/Navigation.component';
import SignIn from './routes/sign-in/SignIn.component';


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
        path : '/signIn',
        element : <SignIn />
      },
      {
        path : 'about',
        element : <h1>About Page</h1>
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
