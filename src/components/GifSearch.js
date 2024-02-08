import React, { useState } from "react";

function GifSearch({ handleSubmit }) {
  const [giphySearch, setGiphySearch] = useState("");

  function handleChange(event) {
    setGiphySearch(event.target.value);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, giphySearch)}>
        <input
          type="text"
          onChange={handleChange}
          value={giphySearch}
          placeholder="Search Giphy"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default GifSearch;