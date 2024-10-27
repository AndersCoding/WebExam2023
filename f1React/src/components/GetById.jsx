import React, { useEffect, useState } from "react";
import DriverService from "../services/DriverService";

const GetById = () => {
  const [driverId, setDriverId] = useState("");
  const [driver, setDriver] = useState(null);

  const handleGetById = async () => {
    try {
      const result = await DriverService.getById(driverId);
      console.log(result);
      setDriver(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container">
      <article className="row justify-content-right mt-5">
        <div className="col-md-6 p-4 bg-danger border border-white rounded w-100">
          <h2 className="text-center mb-2 text-white">Get driver by ID</h2>
          {/* Inputfield for which driver to get */}
          <input
            type="number"
            placeholder="Enter driver ID"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
            className="text-black"
          />
          <button onClick={handleGetById} className="btn btn-success">
            Get Driver
          </button>
        </div>

        {/* Section for display the image of the driver */}
        {/* Since driver useState = null, the && (AND) will check if it's true or not */}
        {driver && (
          <div className="mt-4 bg-danger rounded">
            <div key={driver.id}>
              <h2 className="text-center">ID: {driver.id}</h2>
              <p>Name: {driver.name}</p>
              <img
                src={`http://localhost:5160/images/${driver.image}`}
                className="img-fluid rounded"
              ></img>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default GetById;
