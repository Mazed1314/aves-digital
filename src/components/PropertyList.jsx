const PropertyList = ({ properties }) => {
  return (
    <div className="my-4">
      {properties.map((property, index) => (
        <div
          key={index}
          className="border p-4 rounded bg-violet-50 shadow-md w-full my-2"
        >
          <div className="flex gap-4 justify-between">
            <h3 className="text-lg font-bold">{property.name}</h3>
            <span
              className={
                property.status == "Available"
                  ? "bg-blue-400 text-white rounded-full px-2"
                  : "bg-red-300 text-white rounded-full px-2"
              }
            >
              {property.status}
            </span>
          </div>
          <p>Type: {property.type}</p>

          <p>
            Price: <span className="font-bold">{property.price}</span> BDT
          </p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
