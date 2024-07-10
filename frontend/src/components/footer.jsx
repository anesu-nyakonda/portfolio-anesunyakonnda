function Footer() {
  return (
    <>
      <div className="container-fluid  mt-5">
        <div className="row ms-2 py-3 mt-5">
          <div className="col-md-3">
            <label>
              <img src="src/assets/loggo.png" alt="" className="img-fluid" />
            </label>{" "}
          </div>
          <div className="col-md-3 mb-2">
            <h6 style={{ fontFamily: "lora-regular" }}>Site map</h6>
            <div className="">
              <a href="" className="text-decoration-none text-dark">
                <h6
                  style={{
                    color: "#ADA5A5",
                    fontFamily: "lora-regular",
                    fontSize: "0.75em",
                  }}
                >
                  Home
                </h6>
              </a>
            </div>
            <div className="mb-2">
              <a href="" className="text-decoration-none text-dark">
                <h6
                  style={{
                    color: "#ADA5A5",
                    fontFamily: "lora-regular",
                    fontSize: "0.75em",
                  }}
                >
                  About
                </h6>
              </a>
            </div>
            <div className="mb-2">
              <a href="" className="text-decoration-none text-dark">
                <h6
                  style={{
                    color: "#ADA5A5",
                    fontFamily: "lora-regular",
                    fontSize: "0.75em",
                  }}
                >
                  Services
                </h6>
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <h6 style={{ fontFamily: "lora-regular" }}>Address</h6>
            <p
              style={{
                color: "#ADA5A5",
                fontFamily: "lora-regular",
                fontSize: "0.75em",
              }}
            >
              No. 3 jacaranda close Twinlakes <br></br> Norton Zimbabwe{" "}
              <br></br>IATA Acradited Agent:9601356394
            </p>
          </div>
          <div className="col-md-3 mb-2 ">
            <h6 style={{ fontFamily: "lora-regular" }}>socials</h6>
            <div className="row">
              <div className="col-2">
                <a href="https://github.com/anesu-nyakonda">
                  <img
                    src="src/assets/insta.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-2">
                <a href="https://www.instagram.com/anesunyakonda/">
                  <img src="src/assets/x.png" alt="" className="img-fluid" />
                </a>
              </div>

              <div className="col-2">
                <a href="https://www.instagram.com/anesunyakonda/">
                  <img
                    src="src/assets/github.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-2">
                <a href="https://open.spotify.com/playlist/7mWlEgaAE1gGq91V1U8BXg?si=fda798622c144ff5">
                  <img
                    src="src/assets/spotify.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className=" ms-3 border-2 bg-dark  me-5"></hr>
        <div className="d-flex justify-content-between">
          <div className="col">
            <p className="ms-3" style={{ color: "#ADA5A5", fontSize: "0.6em" }}>
              site by Anesu Nyakonda 2024. All rights reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
