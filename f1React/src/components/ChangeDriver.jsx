import DriverService from "../services/DriverService";
import { useState } from "react";

const ChangeDriver = () => {
  const [driverId, setDriverId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState(null);

  // Image doesn't work. The image doesn't get uploaded to the wwwroot-folder, in the API.
  // Removed the option for the user to change image, and wrote it on the homepage
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "driverId":
        setDriverId(value);
        break;
      case "name":
        setName(value);
        break;
      case "age":
        setAge(parseInt(value));
        break;
      case "nationality":
        setNationality(value);
        break;
      /*
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
        */
      default:
    }
  };

  const handleUpdate = async () => {
    const updatedDriver = {
      id: parseInt(driverId),
      name: name,
      age: age,
      nationality: nationality,
      // Image doesn't get uploaded, name of driver will appear instead
      //image: image.name
    };
    try {
      await DriverService.updateDriver(updatedDriver);
      window.alert("Driver updated successfully");
    } catch (error) {
      window.alert("Driver doesn't exist, unfortunately");
      console.log("Error,", error);
    }
  };

  return (
    <section className="container">
      <article className="row justify-content-center col mt-5 p-4 bg-danger border border-white rounded">
        <h2 className="text-center mb-4">Update Driver</h2>
        <label className="form-label">
          Driver ID:
          <input
            type="number"
            name="driverId"
            value={driverId}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter ID of driver you want to change"
          />
          <br />
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="New name"
            />
          </label>
          <br />
          <label className="form-label">
            Age:
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleInputChange}
              className="form-control"
            />
          </label>
          <br />
          <label className="form-label">
            Nationality:
            <input
              type="text"
              name="nationality"
              value={nationality}
              onChange={handleInputChange}
              className="form-control"
              placeholder="New nationality"
            />
          </label>
          <br />
          {/* Image doesn't work to upload.
          <label className="form-label">
            Image:
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              className="form-control"
            />
          </label>
          */}
          <br />
          <button onClick={handleUpdate} className="btn btn-success">
            Update driver
          </button>
        </label>
      </article>
    </section>
  );
};
export default ChangeDriver;
