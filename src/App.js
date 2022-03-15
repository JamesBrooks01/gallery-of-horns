import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import './App.css';
import Footer from './Footer.js';


class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}

export default App;
