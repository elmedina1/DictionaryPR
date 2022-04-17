import React, { useState } from 'react';
import axios from 'axios';

export default function DictionarySearch() {
  let [keyword, saveKeyword] = useState("");

    function handleResponse(response){
    console.log(response);
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
    </div>
  );
}
