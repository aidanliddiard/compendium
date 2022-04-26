import React from 'react';

export default function PokeCard({ title, poet, content, url }) {
  return (
    <div key={url}>
      <h2>{title}</h2>
      <h5>{poet.name}</h5>
      <p>{content}</p>
    </div>
  );
}
