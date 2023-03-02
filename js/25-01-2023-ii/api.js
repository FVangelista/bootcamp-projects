const GET = async (endpoint) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${endpoint}&order=market_cap_desc&per_page=12&page=1&sparkline=false`
  );
  const data = await res.json();
  return data;
};

export default GET;
