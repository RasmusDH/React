import upper, {text1,text2, text3} from "./file1";
import person, {males, females} from "./file2";
import { MultiWelcome } from "./file3";
import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';

const { firstName, email } = person;

const personV2 = person;
  personV2.phone = 123456;
  personV2.friends = [...males, ...females];


function App() {

  console.log([...males, ...females]);
  console.log([...males, "Kurt", "Helle", ...females, "Tina"]);

  console.log(personV2);

  return (
    <div>
      <h2>Ex 1</h2> 
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>

      <h2>Ex 2</h2>
      <p>FirstName: {firstName}, Email: {email}</p>

      <h2>Ex 3</h2>
      <MultiWelcome/>

      
    </div>
  )
}

export default App;