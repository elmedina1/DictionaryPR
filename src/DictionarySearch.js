import React, { useState } from 'react';
import axios from 'axios';
import Results from "./Results";

export default function DictionarySearch() {
  let [keyword, saveKeyword] = useState("");
  let [results, setResults] =useState(null);

    function handleResponse(response){
    console.log(response);
    setResults(response.data[0]);
}

function searchKeyword(event) {
    event.preventDefault();
  
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log("api yrl"+apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  //

  function saveSearchKeyword(event) {
    saveKeyword(event.target.value);
  console.log("riject", keyword);
  
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={searchKeyword}>
        <input type="search" onChange={saveSearchKeyword} />
      </form>
      <Results results={results}/>
    </div>
  );
}
