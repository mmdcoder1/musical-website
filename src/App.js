import React from 'react';

//style
import './App.css';

//components
import Header from './components/header/Header';
import Main from './components/main/root/Main';
import Status from './components/status/Status';
import Instrument from './components/instruments/Instruments';
import Products from './components/products/root/Products';
import Articles from './components/articles/root/Articles';
import Slider from './components/slider/root/Slider';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
        <Header />
        <Main />
        <Status />
        <Instrument />
        <Products />
        <Articles />
        <Slider />
        <Footer />
    </div>
  );
};

export default App;