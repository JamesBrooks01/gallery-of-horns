import React from 'react';
import HornedBeast from './horned-beast.js';

class Main extends React.Component {
  render() {
    return (
        <main>
          <HornedBeast 
            name="Sheyna" 
            hometown="Seattle" 
            hairColor="Brown"
          />
          <HornedBeast name="Cole"/>
          <HornedBeast name="Nathan"/>
          <HornedBeast name="Eden"/>
        </main>
    );
  }
}

export default Main;