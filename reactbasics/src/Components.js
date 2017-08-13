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
      placeholder={ props.placeholder } />
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
  inputValue="" placeholder="Mr. / Miss / Mrs." />;

const labelLastName = <Customlabel labelFor="lName" labelId="" labelClass="generalLabel" labelText="Last Name" />;

const inputLastName = <Custominput inputType="type" inputId="lName" inputClass="generalTextBox" inputName="lName" 
  inputValue="" placeholder="Surname" />;

const buttonElement = <Custombutton buttonId="" buttonClass="generalButton" buttonValue="GO" buttonText="GO" />;

const resetButtonElement = <Custominput inputType="reset" inputId="" inputClass="generalButton" inputName=""
 inputValue="Reset" placeholder="" />;
