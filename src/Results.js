import React from 'react';
import Meaning from './Meaning.js';
import Phonetic from './Phonetic.js';
import './Dictionary.css';

export default function Results(props) {
  console.log(props.results);

  if (props.results === null) {
    return null;
  } else {
    return (
      <div className='Results'>
        <h3>Word: {props.results.word}</h3>
        <br/>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  }
}
