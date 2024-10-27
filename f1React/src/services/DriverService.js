import axios from "axios";

const DriverService = (() => {
  // Retrieve the data from the API
  const driverController = "http://localhost:5160/Driver";
  const ImageUploadController = "http://localhost:5160/FileUpload"; // Uploading the image to the wwwroot-folder

  // Get all info fra driver API
  const getAll = async () => {
    const result = await axios.get(driverController);
    console.log(result);
    return result.data;
  };

  // Get driver by their id
  const getById = async (id) => {
    const result = await axios.get(`${driverController}/${id}`);
    return result.data;
  };

  // Get driver with their name. Full name
  const getDriverByName = async (name) => {
    const result = await axios.get(`${driverController}/ByName/${name}`);
    return result.data;
  };
  // Endret fra delteById, til deleteById
  const deleteById = async (id) => {
    const result = await axios.delete(`${driverController}/${id}`);
    return result.data;
  };

  // Method for updating driver. Image doesn't work
  const updateDriver = async (updatedDriver) => {
    const result = await axios.put(driverController, updatedDriver);
    return result.data;
  };

  // Method for adding driver to the database
  const addDriver = async (newDriver) => {
    const result = await axios.post(driverController, newDriver);
    return result.data;
  };

  // Method for adding driver AND image to the database and Web API
  const postDriver = async (newDriver, image) => {
    const result = await axios.post(driverController, newDriver);
    const formData = new FormData();
    formData.append("file", image); // Henter "formFile" fra ImageUploadController.cs

    // Lagt til - OBS OBS OBS
    //formData.append("newDriver", JSON.stringify(newDriver));

    const uploadResult = await axios({
      url: ImageUploadController,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    formData.delete("file");
  };

  return {
    getAll,
    getById,
    addDriver,
    postDriver,
    deleteById,
    updateDriver,
    getDriverByName,
  };
})();

export default DriverService;
