import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';

function App() {
  return (
    <main className="App">
        <Navbar/>
        <Header/>
        <Hotels/>
    </main>
  );
}

export default App;
