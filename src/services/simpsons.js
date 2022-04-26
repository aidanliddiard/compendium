export async function fetchQuotes() {
  const resp = await fetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes?count=10'
  );
  const data = await resp.json();
  return data;
}
