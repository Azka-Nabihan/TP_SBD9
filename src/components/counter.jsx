import React, { useState, useEffect } from "react";

export default function Counter() {
  // State untuk menyimpan nilai counter
  const [count, SetCount] = useState(0);

  // useEffect untuk menampilkan alert ketika count habis dibagi 10
  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Angka ${count} habis dibagi 10`);
    }
  }, [count]); // Efek akan dijalankan setiap kali count berubah

  // Fungsi untuk menambahakan, mengurangi, dan merest counter
  const increment = () => SetCount(count + 1);
  const decrement = () => SetCount(count - 1);
  const reset = () => SetCount(0);

  return (
      <div className="container mx-auto">
          
      {/* Heading */}
      <div className="border-b border-gray-600 pb-4">
        <h3 className="text-3xl font-bold text-gray-800">Counter Demo</h3>
      </div>

      <div className="flex flex-col items-center justify-center h-96">
        <div className="text-5xl font-bold mb-6">{count}</div>
        <div className="flex space-x-4">
        <button
            onClick={decrement}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            -
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            +
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
