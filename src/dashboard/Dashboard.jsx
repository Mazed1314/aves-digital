import { useState, useEffect } from "react";
import PropertyForm from "../components/PropertyForm";
import PropertyList from "../components/PropertyList";

const Dashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const savedProperties =
      JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(savedProperties);
  }, []);

  const handleAddProperty = (newProperty) => {
    const updatedProperties = [...properties, newProperty];
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between">
        <div className="my-2">
          <h2 className="text-xl font-semibold">User Property</h2>
        </div>
        {/* for filter and shorting */}
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2">{/* for info */}</div>
        <div className="lg:w-1/2">
          {/* Property add form */}
          <div className="flex justify-end">
            <button
              className="btn  bg-blue-500 text-white"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Add new Property
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <PropertyForm onAddProperty={handleAddProperty} />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-sm bg-red-500 text-white">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* Property list */}
          <PropertyList properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
