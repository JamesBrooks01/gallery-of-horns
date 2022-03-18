import React from 'react';
import HornedBeast from './HornedBeast.js';
import FormComponent from './Form.js';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      allBeasts: this.props.data
    }
  }
handleFormInput = (numHorns) => {
  console.log(numHorns)
  let newBeasts = (this.props.data).filter(i => i.horns === +numHorns);
  console.log(newBeasts);
  console.log(this.props.data[0].horns)
  this.setState({ allBeasts: newBeasts });
}

  render() {
    let allBeasts = this.state.allBeasts.map((beast, i) => (
      <HornedBeast
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        horns={beast.horns}
        key={i}
        displayModal={this.props.displayModal}
      />
    ))
    return (
      <main>
        <FormComponent handleFormInput={this.handleFormInput} className="formCSS"/>
        {allBeasts}
      </main>
    );
  }
}

export default Main;