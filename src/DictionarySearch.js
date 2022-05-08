import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function DictionarySearch(props) {
  let [keyword, saveKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log('api yrl' + apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //

  function saveSearchKeyword(event) {
    saveKeyword(event.target.value);
    console.log('riject', keyword);
  }
  if (loaded) {
    return (
      <div className="DictionarySearch">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={saveSearchKeyword} />
        </form>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return 'Loading...';
  }
}
