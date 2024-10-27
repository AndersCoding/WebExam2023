import DriverService from "../services/DriverService";
import { useEffect, useState } from "react";

const DriverList = () => {
  const [drivers, setDrivers] = useState([{}]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    const driversFromService = await DriverService.getAll();
    setDrivers(driversFromService);
  };

  const getDriversJSX = () => {
    const driverJSX = drivers.map((driver, i) => (
      <div key={i} className="col-md-6 mb-4">
        <div className="p-3 bg-danger rounded border border-white">
          <p>{driver.id}</p>
          <p>Name: {driver.name}</p>
          <p>Age: {driver.age}</p>
          <p>Nationality: {driver.nationality}</p>
          <img
            src={`http://localhost:5160/images/${driver.image}`}
            className="img-fluid rounded"
            alt={`${driver.name}`}
          ></img>
        </div>
      </div>
    ));
    return <div className="row">{driverJSX}</div>;
  };

  return (
    <section>
      <h1 className="text-center">Drivers</h1>
      <div className="container">{getDriversJSX()}</div>
    </section>
  );
};
export default DriverList;
