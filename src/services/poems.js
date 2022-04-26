export async function fetchPoems() {
  const resp = await fetch(
    'https://www.poemist.com/api/v1/randompoems?perPage=10'
  );
  const data = await resp.json();
  return data;
}
