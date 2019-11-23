import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';
import Description from "./components/Description/Description";
import HotelInfo from './components/HotelInfo/HotelInfo';
import Details from './components/Details/Details';
import Location from './components/Location/Location';

function App() {
  return (
    <main className="App">
        <Navbar/>
        <Header/>
        <Hotels/>
        <Description/>
        <HotelInfo/>
        <Details/>
        <Location/>
    </main>
  );
}

export default App;
