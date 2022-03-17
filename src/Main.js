import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    let Beasts =[];
    this.props.data.forEach((beast, i) => {
      Beasts.push(
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          key={i}
          displayModal={this.props.displayModal}
        />
      )
    })
    return (
        <main>
          {Beasts}
        </main>
    );
  }
}

export default Main;