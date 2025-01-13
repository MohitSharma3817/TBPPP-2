import React from 'react';

const MainBody = () => {
  return (
    <main className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Cryptocurrency List</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="text-gray-600 font-medium text-sm py-2 border-b">Number</th>
                  <th className="text-gray-600 font-medium text-sm py-2 border-b">Name</th>
                  <th className="text-gray-600 font-medium text-sm py-2 border-b">Price</th>
                  <th className="text-gray-600 font-medium text-sm py-2 border-b">Change </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 border-b text-sm">1</td>
                  <td className="py-2 border-b text-sm">Bitcoin</td>
                  <td className="py-2 border-b text-sm">$43,000</td>
                  <td className="py-2 border-b text-sm text-green-500">+2.5%</td>
                </tr>
                <tr>
                  <td className="py-2 border-b text-sm">2</td>
                  <td className="py-2 border-b text-sm">Ethereum</td>
                  <td className="py-2 border-b text-sm">$3,200</td>
                  <td className="py-2 border-b text-sm text-red-500">-1.2%</td>
                </tr>
              </tbody>
            </table>
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
