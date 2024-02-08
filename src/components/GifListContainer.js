import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [giphData, setGiphData] = useState([]);
  const [giphySearch, setGiphySearch] = useState("");

  function handleSubmit(event, query) {
    event.preventDefault();
    setGiphySearch(query);

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=lTD5Zzh7gvHERMYQts9eYm1oD7O9B7qD`
    )
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.slice(0, 3).map((gif) => gif.images.original.url);
        setGiphData(gifs);
      });
  }

  return (
    <div>
      <GifList giphs={giphData} />
      <GifSearch handleSubmit={handleSubmit} />
    </div>
  );
}

export default GifListContainer;