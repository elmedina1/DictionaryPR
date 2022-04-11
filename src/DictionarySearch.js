import React, { useState } from 'react';

export default function DictionarySearch() {
  let [keyword, saveKeyword] = useState(null);

  function searchKeyword(event) {
    event.preventDefault();
    alert('searching');
  }

  function saveSearchKeyword(event) {
    saveKeyword(event.target.value);
    alert(keyword);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={searchKeyword}>
        <input type="search" onFocus={true} onChange={saveSearchKeyword} />
      </form>
    </div>
  );
}
