import React from "react";

const Filter = ({ filter, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filter, [name]: value });
  };
  return (
    <div className="flex gap-4 mb-4 flex-wrap">
      <select
        name="type"
        value={filter.type}
        onChange={handleChange}
        className="border p-2 rounded-full bg-orange-400 text-white"
      >
        <option value="All">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Commercial">Commercial</option>
      </select>

      <select
        name="status"
        value={filter.status}
        onChange={handleChange}
        className="border p-2 rounded-full bg-blue-400 text-white"
      >
        <option value="All">All Status</option>
        <option value="Available">Available</option>
        <option value="Rented">Rented</option>
      </select>
    </div>
  );
};

export default Filter;
