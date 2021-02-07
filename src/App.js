import React from 'react';
import AddBook from './Components/AddBook'
import BookContainer from './Components/BookContainer'
import Header from './Components/Header'
import './App.css'
import './Setup.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <AddBook/>
      <BookContainer/>
    </div>
  );
}

export default App;
