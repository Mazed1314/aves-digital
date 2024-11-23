import { useState } from "react";

const PropertyForm = ({ onAddProperty }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "Apartment",
    status: "Available",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.price) {
      onAddProperty(formData);
      setFormData({
        name: "",
        type: "Apartment",
        status: "Available",
        price: "",
      });
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <form
      className="bg-violet-100 p-4 shadow-md rounded"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-bold mb-4">Add New Property</h2>
      <div className="mb-2">
        <label className="block font-medium">Property Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-medium">Type:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        >
          <option>Apartment</option>
          <option>House</option>
          <option>Commercial</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block font-medium">Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        >
          <option>Available</option>
          <option>Rented</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block font-medium">Price (BDT):</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Add Property
      </button>
    </form>
  );
};

export default PropertyForm;
