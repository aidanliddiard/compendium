import React, { useEffect, useState } from 'react';
import PokeCard from '../components/PokeCard';
import { fetchPokemon } from '../services/pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchPokemon();
        setPokemon(data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  console.log(pokemon);

  return (
    <div>
      {pokemon.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
