function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 mb-5">
            <h1
              className=" fw-bald ms-1  "
              style={{ color: "#DBDBDB", fontFamily: "roboto-bald" }}
            >
              Let's talk.
            </h1>
            <p
              className="fw-light ms-1"
              style={{ color: "#DBDBDB", fontFamily: "roboto-light" }}
            >
              Ask anything or just say hi...
            </p>
            <div
              className="text-light mt-5 mb-5"
              style={{
                color: "#ADA5A5",
                fontFamily: "lora-regular",
              }}
            >
              <img
                className="img-fluid me-2 "
                src="src/assets/phone.png"
                alt=""
              />
              +263 78 904 5158
            </div>
            <div
              className="text-light"
              style={{
                color: "#ADA5A5",
                fontFamily: "lora-regular",
              }}
            >
              <img
                src="src/assets/email.png"
                alt=""
                className="img-fluid me-2"
              />
              nyakondaa@africau.edu
            </div>
            <div className="row ">
              <div className="col-7 mt-4">
                <a href="https://maps.app.goo.gl/tAEt7k1AX1g9hrHm7">
                  <img src="src/assets/home.png" alt="" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="row">
              <div className="col-6 mt-3">
                <label
                  htmlFor=""
                  className="text-light"
                  style={{
                    color: "#ADA5A5",
                    fontFamily: "lora-regular",
                  }}
                >
                  first name*
                </label>
                <input
                  type="text"
                  className="form-control border-top-0 border-end-0 border-start-0"
                  aria-label="First name"
                  style={{ backgroundColor: "#383838", color: "#DBDBDB" }}
                />
              </div>
              <div className="col-6 mt-3">
                <label
                  htmlFor=""
                  className="text-light"
                  style={{
                    color: "#ADA5A5",
                    fontFamily: "lora-regular",
                  }}
                >
                  email*
                </label>
                <input
                  type="text"
                  className="form-control border-top-0 border-end-0 border-start-0"
                  aria-label="First name"
                  style={{ backgroundColor: "#383838", color: "#DBDBDB" }}
                />
              </div>
              <div className=" col-12 mt-5 mb-5">
                <label
                  htmlFor=""
                  className="text-light"
                  style={{
                    color: "#ADA5A5",
                    fontFamily: "lora-regular",
                  }}
                >
                  Message*
                </label>
                <textarea
                  className="form-control mt-5 text-light border-top-0 border-end-0 border-start-0"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  style={{ backgroundColor: "#383838", color: "#DBDBDB" }}
                ></textarea>

                <button
                  className="btn mt-5 btn-lg"
                  style={{
                    backgroundColor: "#EDA398",
                    fontFamily: "roboto-light",
                  }}
                >
                  send
                  <img
                    src="src/assets/send.png"
                    alt=""
                    className="img-fluid ms-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
