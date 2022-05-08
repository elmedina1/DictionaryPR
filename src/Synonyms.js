import React from 'react';

export default function Synonyms(props) {
  console.log('nesto' + props.synonyms);
  if (props.synonyms && props.synonyms.length>0) {
    return (
      <div className="Synonyms">
        <br /> <strong>Synonyms:</strong>
        <br />
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
