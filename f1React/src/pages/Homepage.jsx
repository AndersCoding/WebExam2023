<link rel="stylesheet" href="src/Styling.css" />;
const Homepage = () => {
  return (
    <section className="container content-centers">
      <div className="row">
        <img
          src="src/assets/f1home.jpeg"
          alt="racecar"
          className="background-image"
        />
      </div>
      <section className="container">
        <article className="row content center">
          <div className="homebox mw-150 mt-5 border border-white bg-dark rounded text-center">
            <h1>Welcome to the Formula 1 Homepage</h1>
            <p>
              We have implemented CRUD for the whole API, for you to check out
            </p>
            <p>
              <code>See all drivers</code> shows you all the drivers in the API
            </p>
            <p>
              <code>Add driver</code> will let you add a driver of your own
              choice. Type inn your name, age, nationality and upload an image.
            </p>
            <p>
              <code>Delete driver</code> let's you delete a driver. Just type
              inn the ID of the driver you want to delete
            </p>
            <p>
              <code>Change driver</code> will change the name, age and
              nationality. We are currently not able to fix the image,
              unfortunately
            </p>
            <p>
              <code>Get driver</code> will let you get any driver, either with
              their ID or their name
            </p>
            <p>
              <code>RaceGame</code> will let you race Ferrari against Mercedes,
              with a 50/50 winning chance of either car!
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Homepage;
