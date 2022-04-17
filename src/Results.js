import react from 'react';
import Meaning from "./Meaning.js"

export default function Results(props) {
  console.log(props.results);

  if (props.results === null) {
    return null;
  } else {
    return <div>

<h3>Word: {props.results.word}</h3>
<h3>Phonetics: {props.results.phonetic}</h3>

{props.results.meanings.map(function(meaning, index){
return (

    <div key={index}>
    <Meaning meaning={meaning}/> 
    </div>
)

})}

    </div>;
  }
}
