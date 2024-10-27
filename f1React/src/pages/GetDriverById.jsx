import GetById from "../components/GetById";
import GetDriverByName from "../components/GetDriverByName";
const getDriverById = () => {
  return (
    <section className="container mt-2">
      <article className="row">
        <div className="col-md-6">
          <GetById />
        </div>
        <div className="col-md-6">
          <GetDriverByName />
        </div>
      </article>
    </section>
  );
};
export default getDriverById;
