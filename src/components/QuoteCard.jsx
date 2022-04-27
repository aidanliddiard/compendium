import React from 'react';

export default function QuoteCard({ character, quote, image }) {
  return (
    <div>
      <h2>{character}</h2>
      <p>{quote}</p>
      <img src={image} />
    </div>
  );
}
