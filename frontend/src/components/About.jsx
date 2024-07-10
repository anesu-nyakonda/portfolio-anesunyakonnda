import "../App.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      console.log("about is in view");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView]);
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-1 d-md-none d-lg-none d-sm-block mt-5">
            <span className="d-lg-none">
              <div className="d-flex">
                <div
                  className="vr"
                  style={{
                    height: "11em",
                    color: "#EDA398",
                    width: "5PX",
                  }}
                ></div>
              </div>
            </span>
          </div>
          <div className="col-md-3 d-none d-md-block ms-3">
            <img src="src/assets/about.jpeg" alt="" className="img-fluid" />
          </div>
          <div className=" col col-lg-7 ms-lg-5 px-lg-5">
            <h1
              className="display-3 fw-normal ms-2  "
              style={{ color: "#DBDBDB", fontFamily: "roboto-bald" }}
            >
              About me.
            </h1>
            <div className="">
              <p
                className="dislpay-lg-4"
                style={{ color: "#ADA5A5", fontFamily: "lora-regular" }}
              >
                I am a freelance web and game developer in Zimbabwe. I develop
                functional and beautiful web applications.My freelance web
                development roots are in the MERN stack , of which I'm self
                taught.I help people like you bring their ideas into
                life.Sometimes i make games. I am also passionate about music,
                you{" "}
                <span>
                  {" "}
                  <img
                    src="src/assets/index2.png"
                    alt=""
                    className="img-fluid"
                  />
                </span>{" "}
                should check out my playlist too
              </p>
            </div>
            <span>
              <h3
                className="mt-5 ms-2"
                style={{ color: "#DBDBDB", fontFamily: "roboto-light" }}
              >
                My stack.
              </h3>
              <div className="row mt-3" ref={ref}>
                <motion.div
                  className="col-md-1 col-2"
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControl}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <img
                    src="src/assets/mongo.png"
                    alt="anesu nyakonda"
                    className="img-fluid"
                  />
                </motion.div>
                <motion.div
                  className="col-md-1 col-2"
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControl}
                  transition={{ duration: 0.5, delay: 0.42 }}
                >
                  <img
                    src="src/assets/express2.png"
                    alt=""
                    className="img-fluid"
                  />
                </motion.div>
                <motion.div
                  className="col-md-1 col-2"
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControl}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <img
                    src="src/assets/react2.png"
                    alt=""
                    className="img-fluid"
                  />
                </motion.div>
                <motion.div
                  className="col-md-1 col-2"
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControl}
                  transition={{ duration: 0.5, delay: 0.47 }}
                >
                  <img
                    src="src/assets/node2.png"
                    alt=""
                    className="img-fluid"
                  />
                </motion.div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
