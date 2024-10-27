import React, { useEffect, useState } from "react";
import DriverService from "../services/DriverService";

const GetDriverByName = () => {
  const [name, setName] = useState("");
  const [drivers, setDrivers] = useState(null);

  const handleGetByName = async () => {
    try {
      const result = await DriverService.getDriverByName(name);
      setDrivers(result);
    } catch (e) {
      console.log("Error,", e);
    }
  };

  return (
    <section className="container">
      <article className="row mt-5">
        <div className="col-md-6 p-4 bg-danger border border-white rounded w-100">
          <h2 className="text-center mb-2 text-white">Get driver by name</h2>
          {/* Inputfield for which driver to get */}
          <input
            className="text-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter drivers full name"
          />
          <button onClick={handleGetByName} className="btn btn-success">
            Get drivers
          </button>
        </div>
        {/* Driver will appear here */}
        {/* Identical method for showing drivers, as in GetById */}
        {drivers && (
          <div className="mt-4 bg-danger rounded">
            <div key={drivers.id}>
              <h2 className="text-center">{drivers.name}</h2>
              <img
                src={`http://localhost:5160/images/${drivers.image}`}
                alt={drivers.name}
                className="img-fluid rounded"
              />
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default GetDriverByName;
