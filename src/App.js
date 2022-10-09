import React from 'react'
import Directory from './components/directory/Directory.component';
import Navigation from './routes/navigation/Navigation.component';

function App() {
  
  return (
    <div className="app">
      <Navigation />
      <Directory />
    </div>
  );
}

export default App;
