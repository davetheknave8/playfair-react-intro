import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeForm from './components/welcomeForm/welcomeForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        My First React App!!!!
        <WelcomeForm />
      </header>
    </div>  
  );
}

export default App;
