import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    }
  }
  render() {
    return (
      <main>
          {this.state.data.map((beast, i) => (
              <HornedBeast
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
                key={i}
                displayModal={this.props.displayModal}
              />
          ))}
        </main>
    );
  }
}

export default Main;