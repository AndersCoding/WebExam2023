import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import DriverPage from "./pages/DriverPage";
import Homepage from "./pages/Homepage";
import AddDriverPage from "./pages/AddDriverPage";
import DeleteDriverPage from "./pages/DeleteDriverPage";
import ChangeYourDriver from "./pages/ChangeYourDriver";
import GetDriverById from "./pages/GetDriverById";
import RaceGame from "./components/RaceGame";

// Bootstrap v5
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          {/* Nav bar for the main-menu */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Collapsable burger-nav-bar */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"driverpage"}>
                      See all drivers
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"adddriverpage"}>
                      Add driver
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to={"deletedriverpage"}
                    >
                      Delete a driver
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"changedriver"}>
                      Change driver
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"getbyid"}>
                      Get driver
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"gamepage"}>
                      RaceGame
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="driverpage" element={<DriverPage />}></Route>
            <Route path="adddriverpage" element={<AddDriverPage />}></Route>
            <Route
              path="deletedriverpage"
              element={<DeleteDriverPage />}
            ></Route>
            <Route path="changedriver" element={<ChangeYourDriver />}></Route>
            <Route path="getbyid" element={<GetDriverById />}></Route>
            <Route path="gamepage" element={<RaceGame />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
