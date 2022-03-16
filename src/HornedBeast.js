import React from 'react';
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
      <article>
       <h2>{this.props.title}</h2>
       <img src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.handleFavs}/>
       <p>{this.state.favorites}❤️</p>
       <p>{this.props.description}</p>
      </article>
    );
  }
}


export default HornedBeast;