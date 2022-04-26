import React, { useEffect, useState } from 'react';
import PokeCard from '../components/PoemCard';
import { fetchPoems } from '../services/poems';

export default function Main() {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchPoems();
        setPoems(data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  console.log(poems);

  return (
    <div>
      {poems.map((poem) => (
        <PokeCard key={poem.id} {...poem} />
      ))}
    </div>
  );
}
