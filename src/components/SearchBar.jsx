import React from 'react'

function SearchBar({ city, setCity, onSearch }) {
  return (
    <form
      onSubmit={onSearch}
      className="flex gap-3 w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="flex-1 px-5 py-3 rounded-xl border bg-amber-50 border-gray-200 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}


export default SearchBar