import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';

function App() {
  return (
    <main className="App">
      <body>
        <Navbar/>
        <Header/>
        <Hotels/>
      </body>
    </main>
  );
}

export default App;
