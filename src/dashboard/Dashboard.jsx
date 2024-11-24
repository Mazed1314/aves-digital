import { useState, useEffect } from "react";
import PropertyForm from "../components/PropertyForm";
import PropertyList from "../components/PropertyList";
import Filter from "../components/Filter";
import Stats from "../components/Stats";

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState({ type: "All", status: "All" });

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
    <div className="md:w-11/12 mx-auto">
      <div className="mb-4 mt-2">
        <h2 className="text-2xl font-semibold">User Properties</h2>
      </div>
      <div className="flex justify-end gap-5">
        <Filter filter={filter} onFilterChange={setFilter} />
        {/* Property add form */}
        <div className="flex justify-end">
          <button
            className="btn bg-blue-500 text-white"
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
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2">
          <Stats properties={properties} />
        </div>
        <div className="lg:w-1/2">
          {/* Property list */}
          <div className="p-4 bg-base-200 my-4 rounded-md">
            <h2 className="text-lg font-semibold my-4">
              Property List : {properties.length}
            </h2>
            {properties.length !== 0 ? (
              <>
                <PropertyList properties={properties} filter={filter} />
              </>
            ) : (
              <>
                <h2 className="text-lg font-bold text-center my-2">
                  You have no property right now
                </h2>
              </>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
