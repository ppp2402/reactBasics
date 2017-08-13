import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Customimage(props) {
  return (
    <img
      src={ props.imagePath }
      id={ props.imageId }
      className={ props.imageClass }
      width={ props.imageWidth }
      height={ props.imageHeight }
      alt={ props.imageAlt } />
  );
}

function Customlabel(props) {
  return (
    <label
      for={ props.labelFor }
      id={ props.labelId }
      className={ props.labelClass }>
      { props.labelText }
    </label>
  );
}

function Custominput(props) {
  return (
    <input
      type={ props.inputType }
      id={ props.inputId }
      className={ props.inputClass }
      name={ props.inputName }
      value={ props.inputValue }
      placeholder={ props.placeholder } 
      required = { props.required } />
  );
}

function Custombutton(props) {
  return (
    <button
      id={ props.buttonId }
      className={ props.buttonClass }
      value={ props.buttonValue }>
      { props.buttonText }
    </button>
  );
}


const imageElement = <Customimage imagePath="http://www.freepngimg.com/download/cartoon/2-2-cartoon-png-picture.png" 
imageId="cartoon" imageClass="cartoon" imageWidth="100" imageHeight="100" imageAlt="cartoon" />;

const labelFirstName = <Customlabel labelFor="fName" labelId="" labelClass="generalLabel" labelText="First Name" />;

const inputFirstName = <Custominput inputType="type" inputId="fName" inputClass="generalTextBox" inputName="fName"
  inputValue="" placeholder="Mr. / Miss / Mrs." required />;

const labelLastName = <Customlabel labelFor="lName" labelId="" labelClass="generalLabel" labelText="Last Name" />;

const inputLastName = <Custominput inputType="type" inputId="lName" inputClass="generalTextBox" inputName="lName" 
  inputValue="" placeholder="Surname" required />;

const buttonElement = <Custombutton buttonId="" buttonClass="generalButton" buttonValue="GO" buttonText="GO" />;

const resetButtonElement = <Custominput inputType="reset" inputId="" inputClass="generalButton" inputName=""
 inputValue="Reset" placeholder="" />;


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { formTitle : "Submit Cartoon Data" };
  }

  render() {
    //console.log(this);
    return (
      <form method="post">
        <div className="subContainer"><h3>{ this.state.formTitle }</h3></div>
        <div className="subContainer">{ imageElement }</div>
        <div className="subContainer">
          <span className="subContainerInline">{labelFirstName}</span>
          <span className="subContainerInline">{ inputFirstName }</span>
        </div>
        <div className="subContainer">
          <span className="subContainerInline">{labelLastName}</span>
          <span className="subContainerInline">{ inputLastName }</span>
        </div>
        <div className="subContainer">
          <span className="subContainerInline">{ buttonElement }</span>
          <span className="subContainerInline">{ resetButtonElement }</span>
        </div>
      </form>
    )
  }
}

export default App;
