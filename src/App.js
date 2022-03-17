import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import './App.css';
import Footer from './Footer.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


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
    console.log(beastDesc);
    console.log(image_url);
  };
  render() {
    return (
      <>
        <Header/>
        <Main data={data} displayModal={this.displayModal}/>
        <Footer/>
        <Modal show={this.state.modalDisplay} onHide={this.hideModal} size={'xl'} className="Modal">
          <Modal.Header closeButton>
            <Modal.Title>
              <Image src={this.state.image_url} fluid={true}></Image>
            </Modal.Title>
            <Modal.Body>
              <h3>{this.state.beastDesc}</h3>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
