import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }
  handleFavs = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  };
  render() {
    return (
      <Card className="card" bg='dark' border='primary'>
        <Card.Body>
            <Card.Title className='cardTitle' style={{fontSize:"1.5vw"}}>{this.props.title}</Card.Title>
          <Card.Img className="cardImg" src={this.props.image_url} onClick={this.handleFavs}/>
          <Card.Text>{this.state.favorites}❤️</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}


export default HornedBeast;