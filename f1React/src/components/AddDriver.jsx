import { useEffect, useState } from "react";
import DriverService from "../services/DriverService";
const AddDriver = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "age":
        setAge(parseInt(e.currentTarget.value));
        break;
      case "nationality":
        setNationality(e.currentTarget.value);
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
    }
  };

  const saveDriver = async () => {
    const newDriver = {
      name: name,
      age: age,
      nationality: nationality,
      image: image.name,
    };
    try {
      await DriverService.postDriver(newDriver, image);
      window.alert("Driver added successfully");
    } catch (e) {
      console.log("Error caused by: ", e);
    }
  };

  return (
    <section className="container">
      <article className="row justify-content-center col mt-5 p-4 bg-danger rounded border border-white">
        <h3 className="text-center mb-4">Add your own driver</h3>
        <p className="text-center">
          We unfortunately don't accept AVIF-files for images
        </p>
        {/* Section for adding driver to the database */}
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        {/* Age of new driver */}
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            name="age"
            onChange={handleChange}
            type="number"
            className="form-control"
            placeholder="Enter your age"
          />
        </div>
        {/* Nationality of new driver */}
        <div className="mb-3">
          <label className="form-label">Nationality</label>
          <input
            name="nationality"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter your nationality"
          />
        </div>
        {/* Image of new driver */}
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* Button to activate saveDriver */}
        <input
          onClick={saveDriver}
          type="button"
          value="Save driver"
          className="text-black btn btn-success text-white"
          alt="Save_driver"
        />
      </article>
    </section>
  );
};

export default AddDriver;
