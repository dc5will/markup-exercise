import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Description from "./components/Description/Description";

function App() {
  return (
    <main className="App">
        <Navbar/>
        <Header/>
        <Hotels/>
        <Description/>
    </main>
  );
}

export default App;
