import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';
// import './CourseInput.css';

const FormControl = styled.div`
/* .form-control { */
  margin: 0.5rem 0;
/* } */

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.valid ? "red" : "black"};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.valid ? "red" : "black"};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}
/* &.active label {
  color: red;
}

&.active input {
  border: 1px solid #ca0000;
  background-color: rgb(255, 192, 192);
} */

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

`


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("hi")
    // event.target.reset();

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl valid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
