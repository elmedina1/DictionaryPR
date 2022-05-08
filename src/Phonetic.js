import React from 'react';

export default function Phonetic(props) {
  console.log('propet' + props);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_black">
        Listen{' '}
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
