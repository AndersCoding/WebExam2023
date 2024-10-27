import DriverService from "../services/DriverService";
import { useState } from "react";

const DeleteDriver = () => {
  const [driverId, setDriverId] = useState("");

  const handleInputChange = (e) => {
    setDriverId(e.target.value);
  };

  // Takes id and locates the driver from the database and deletes it
  // Image of new driver still remains in wwwroot-folder, in the API
  const handleDelete = async () => {
    try {
      const response = await DriverService.deleteById(driverId);
      window.alert("Driver deleted successfully");
    } catch (error) {
      console.error("Error deleting driver:", error);
    }
  };

  return (
    <section className="container">
      <article className="row justif-content-center col mt-5 p-4 bg-danger border border-white rounded">
        <h2 className="text-center mb-4">Delete Driver</h2>
        <label className="form-label">
          Driver ID:
          <input
            type="number"
            name="id"
            value={driverId}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter the ID of the driver"
          />
        </label>
        <button
          onClick={handleDelete}
          className="text-black btn btn-dark text-white"
        >
          Delete Driver
        </button>
      </article>
    </section>
  );
};

export default DeleteDriver;
