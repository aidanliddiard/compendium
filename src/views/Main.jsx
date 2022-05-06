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
        setTimeout(() => {
          setLoading(false);
        }, 200);
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
        <QuoteCard key={quote.quote} {...quote} />
      ))}
    </div>
  );
}
