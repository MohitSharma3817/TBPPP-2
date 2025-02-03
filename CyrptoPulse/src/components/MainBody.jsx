import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
              per_page: 50,
              page: 1,
              sparkline: false,
              price_change_percentage: "24h",
            },
          }
        );
        setCryptoData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = cryptoData.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  if (loading) return <div className="text-center text-black">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-black mb-8 top-4">Crypto Dashboard</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a coin"
          className="w-full max-w-md px-4 py-2 mb-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <div className="w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((coin) => (
                <div
                  key={coin.id}
                  className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <img src={coin.image} alt={coin.name} className="w-12 h-12 mr-4" />
                    <div>
                      <h2 className="text-lg font-bold">{coin.name}</h2>
                      <p className="text-sm text-gray-500 uppercase">{coin.symbol}</p>
                    </div>
                  </div>
                  <p className="text-base font-medium">
                    <span className="font-bold">Price:</span> ${coin.current_price.toFixed(2)}
                  </p>
                  <p className={`text-base font-medium ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="font-bold">24h Change:</span> {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No coins found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPrices;
