import React from 'react';
import HornedBeast from './horned-beast.js';

class Main extends React.Component {
  render() {
    return (
        <main>
          <HornedBeast title="Goat" imageURL="./imgs/pexels-ekaterina-bolovtsova-5263829.jpg" description="A Goat" />
          <HornedBeast title="Hebridean Sheep" imageURL="./imgs/Hebridean_Sheep.jpg" description="A Hebridian Sheep"/>
        </main>
    );
  }
}

export default Main;