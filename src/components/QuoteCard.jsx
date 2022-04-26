import React from 'react';

export default function QuoteCard({ character, quote, image }) {
  return (
    <div key={quote}>
      <h2>{character}</h2>
      <p>{quote}</p>
      <img src={image} />
    </div>
  );
}
