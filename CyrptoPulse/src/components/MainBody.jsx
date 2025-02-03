import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch cryptocurrency data.");
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Cryptocurrency Prices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cryptoData.map((coin) => (
          <div
            key={coin.id}
            className="bg-slate-200 shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-12 h-12 mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">{coin.name}</h2>
                <p className="text-sm text-gray-500 uppercase">{coin.symbol}</p>
              </div>
            </div>
            <p className="text-base font-medium">
              <span className="font-bold">Price:</span> ${coin.current_price.toFixed(2)}
            </p>
            <p className="text-base font-medium">
              <span className="font-bold">Market Cap:</span> ${coin.market_cap.toLocaleString()}
            </p>
            <p className="text-base font-medium">
              <span className="font-bold">Total Volume:</span> ${coin.total_volume.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPrices;
