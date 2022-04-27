import React, { useEffect, useState } from 'react';
import QuoteCard from '../components/QuoteCard';
import { fetchQuotes } from '../services/simpsons';

export default function Main() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchQuotes();
        setQuotes(data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {quotes.map((quote) => (
        <QuoteCard key={quote} {...quote} />
      ))}
    </div>
  );
}
