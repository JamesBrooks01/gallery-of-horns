import React from 'react';
import data from './data.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        modalDisplay: false,
        image_url: {},
        beastDesc: ''
      };
  }
  hideModal = () => {
    this.setState({
      modalDisplay: false
    });
  };
  displayModal= (beastDesc, image_url) => {
    this.setState({
      modalDisplay: true,
      beastDesc: beastDesc,
      image_url: image_url
    });
  };
  render() {
    return (
      <>
        <Header/>
        <Main data={data} displayModal={this.displayModal}/>
        <Footer/>
        <SelectedBeast modalDisplay ={this.state.modalDisplay} hideModal={this.hideModal} image_url={this.state.image_url} beastDesc={this.state.beastDesc}/>
      </>
    );
  }
}

export default App;
