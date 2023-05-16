import React from 'react';
import './App.css';
import ChatsContainer from './components/ChatsContainer/ChatsContainer';
import MessagesContainer from './components/MessagesContainer/MessagesContainer';

function App() {
  return (
    <div className="App">
      <ChatsContainer />
      <MessagesContainer />
    </div>
  );
}

export default App;
