import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FormComponent extends React.Component {
  handleFormSubmission = (numberPara) => {
    console.log(numberPara.target.value)
    let number = numberPara.target.value;
    this.props.handleFormInput(number)
  }
  render() {
    return (
      <Form>
        <Form.Group controlId='number'>
          <Form.Label>Filter by Number of Horns</Form.Label>
          <Form.Select onChange={this.handleFormSubmission} name="numHornSelector">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          Reset Page
        </Button>
      </Form>
  )
  }
}

export default FormComponent