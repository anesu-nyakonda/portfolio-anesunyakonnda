import "../App.css";
function NavBar() {
  return (
    <>
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="#" className="navbar-brand mx-2">
            <img src="src/assets/loggo.png" alt="" className="img-fluid" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <div className="navbar-nav roboto-">
              <a
                className="nav-link  ms-5 px-3"
                aria-current="page"
                href="#home"
                style={{ fontFamily: "roboto-bold", fontSize: "1.5rem" }}
              >
                Home
              </a>
              <a
                className="nav-link ms-5 px-5 "
                href="#about"
                style={{ fontFamily: "roboto-bold", fontSize: "1.5rem" }}
              >
                About
              </a>
              <a
                className="nav-link ms-5 px-5"
                href="#contact"
                style={{ fontFamily: "roboto-bold", fontSize: "1.5rem" }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
