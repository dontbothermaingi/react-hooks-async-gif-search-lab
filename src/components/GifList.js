import React from "react";

function GifList({ giphs }) {
  return (
    <div>
      {giphs.map((giph, index) => (
        <ul key={index}>
          <li>
            <img src={giph} alt={`gif_${index}`} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default GifList;