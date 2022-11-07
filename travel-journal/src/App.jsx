import React from 'react';
import Header from "./components/Header";
import Card from "./components/Card"
import data from './assets/data/data';

function App() {
  const cards = data.map(
    d => {
      return <Card key={d.description} data={d}/>
    }
  )
  return (
    <div className="app">
      <Header />
      <div className="cards-container">{cards}</div>
    </div>
  )  
}

export default App
