import React from 'react';

const MainBody = () => {
  return (
    <main className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Cryptocurrency List</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://ultimatesecurecash.info/wp-content/uploads/2020/06/Bitcoin-chart.jpg" alt="Bitcoin" className="w-full h-32 object-cover"/>
                  <div className="p-4">
                    <h2 className="text-gray-800 font-bold text-xl">Bitcoin</h2>
                    <p className="text-gray-600 text-sm">Price: $43,000</p>
                    <p className="text-green-500 text-sm">Change: +2.5%</p>
                    <p className="text-gray-600 text-sm">Volume Traded: 98,76,54,321</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://www.investopedia.com/thmb/cUGagN7B8wrie4J0FdzxKMIq7P4=/4500x3002/filters:fill(auto,1)/stack-of-ether-coins-with-gold-background-901948904-a546d2200ec44115a4c219bce36f88bf.jpg" alt="Ethereum" className="w-full h-32 object-cover"/>
                  <div className="p-4">
                    <h2 className="text-gray-800 font-bold text-xl">Ethereum</h2>
                    <p className="text-gray-600 text-sm">Price: $3,200</p>
                    <p className="text-red-500 text-sm">Change: -1.2%</p>
                    <p className="text-gray-600 text-sm">Volume Traded: 12,34,56,789</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" className="w-full h-32 object-cover"/>
                  <div className="p-4">
                    <h2 className="text-gray-800 font-bold text-xl">Solana</h2>
                    <p className="text-gray-600 text-sm">Price: $150</p>
                    <p className="text-green-500 text-sm">Change: +5.0%</p>
                    <p className="text-gray-600 text-sm">Volume Traded: 15,67,89,012</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9bcruJbhodmvjKayM9xWuOh-JZ7MO3-4SQ&s" alt="Ripple" className="w-full h-32 object-cover"/>
                  <div className="p-4">
                    <h2 className="text-gray-800 font-bold text-xl">Ripple</h2>
                    <p className="text-gray-600 text-sm">Price: $1.20</p>
                    <p className="text-red-500 text-sm">Change: -0.8%</p>
                    <p className="text-gray-600 text-sm">Volume Traded: 8,91,23,456</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://cryptologos.cc/logos/cardano-ada-logo.png" alt="Cardano" className="w-full h-32 object-cover"/>
                  <div className="p-4">
                    <h2 className="text-gray-800 font-bold text-xl">Cardano</h2>
                    <p className="text-gray-600 text-sm">Price: $1.60</p>
                    <p className="text-green-500 text-sm">Change: +3.2%</p>
                    <p className="text-gray-600 text-sm">Volume Traded: 9,56,78,234</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://walloftraders.com/blog/wp-content/uploads/2022/02/polkadot-1.jpg" alt="Polkadot" className="w-full h-32 object-cover"/>
                  <div className="p-4">
                    <h2 className="text-gray-800 font-bold text-xl">Polkadot</h2>
                    <p className="text-gray-600 text-sm">Price: $25</p>
                    <p className="text-green-500 text-sm">Change: +4.5%</p>
                    <p className="text-gray-600 text-sm">Volume Traded: 5,23,45,678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Market Trends</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-400">Chart Place</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainBody;
