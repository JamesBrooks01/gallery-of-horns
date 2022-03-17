import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component {
  render() {
    return (
    <Modal show={this.props.modalDisplay} onHide={this.props.hideModal} size={'xl'} className="Modal">
    <Modal.Header closeButton>
      <Modal.Title>
        <Image src={this.props.image_url} fluid={true}></Image>
      </Modal.Title>
      <Modal.Body>
        <h3>{this.props.beastDesc}</h3>
      </Modal.Body>
    </Modal.Header>
  </Modal>
    )
  }
}

export default SelectedBeast;
