import React, { useState, useEffect } from "react";

const RaceGame = () => {
  // Ferrari starting position, useState for movement
  const [ferrariPosition, setCar1Position] = useState({
    top: 50,
    left: 0,
  });
  // Mercedes starting position, useState for movement
  const [mercedesPosition, setCar2Position] = useState({
    top: 200,
    left: 0,
  });

  // Methdod for updating position of the cars to the left-variable
  const updateCarPosition = (prevPosition, speed, raceEnd) => ({
    left: Math.min(prevPosition.left + speed, raceEnd),
  });

  // Method for moving the cars
  const moveCars = () => {
    const maxSpeed = 200; // The length of the movemement to the left

    // The finish line is the end of the page,
    // minus 200, to be able to see the cars after they finished.
    // This makes the gamepage/gameplay responsive with the size of the screen
    const raceEnd = window.innerWidth - 200;

    // Both cars's movement will be randomized with the Math.floor/random * maxSpeed,
    // making the outcome, and the winner, random
    const ferrariSpeed = Math.floor(Math.random() * maxSpeed);
    const mercedesSpeed = Math.floor(Math.random() * maxSpeed);

    // Sending the speed to the cars
    setCar1Position((prevPosition) =>
      updateCarPosition(prevPosition, ferrariSpeed, raceEnd)
    );
    setCar2Position((prevPosition) =>
      updateCarPosition(prevPosition, mercedesSpeed, raceEnd)
    );

    // If-loop to check if one of the car has crossed the finishing line
    if (ferrariPosition.left >= raceEnd || mercedesPosition.left >= raceEnd) {
      // Declaring the winner with if-loop
      const winner =
        ferrariPosition.left > mercedesPosition.left ? "Ferrari" : "Mercedes";
      alert(`Congratulations! ${winner} won the race!`);
    }
  };

  return (
    <section className="raceSection container">
      <article className="row justify-content-center">
        {/* Image of Ferrari car and placement with styling */}
        <div className="col-md-6">
          <img
            className="redbullCar img-fluid"
            src="src/assets/RedBull.png"
            alt="RedBull_car"
            style={{
              top: `${ferrariPosition.top}px`,
              left: `${ferrariPosition.left}px`,
            }}
          />
        </div>
        {/* Image of Mercedes car, with same styling as Ferrari, only lower on the page */}
        <div className="col-md-6">
          <img
            className="mercedCar img-fluid"
            src="src/assets/Mercedes.png"
            alt="Mercedes_car"
            style={{
              top: `${mercedesPosition.top}px`,
              left: `${mercedesPosition.left}px`,
            }}
          />
        </div>
      </article>

      {/* Button that activates the gas-pedal for both the cars */}
      <div className="col-md-12 mt-3 text-center">
        <button onClick={moveCars} alt="Press_to_give_gass" className="rounded">
          Press to give gass
        </button>
      </div>
    </section>
  );
};

export default RaceGame;
