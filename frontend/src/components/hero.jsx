import "../App.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView]);
  return (
    <>
      <div className="container-fluid">
        <div ref={ref} className="row mx-3 justify-content-between">
          <motion.div
            className="col-lg-6 mt-5 pt-5 mt-lg-5 pt-lg-5 pe-lg-5"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1
              className="display-2 fw-bold"
              style={{
                fontFamily: "roboto-bald",
                color: "#3E3B39",
              }}
            >
              Hey,
              <span className="fw-normal">
                {" "}
                I'm Anesu a full stack web developer
              </span>
            </h1>
            <h5 style={{ fontFamily: "roboto-regular", color: "#949090" }}>
              I develop beautiful web apps and mobile games.
            </h5>
            <button
              className="btn mt-4 btn-lg"
              style={{ backgroundColor: "#EDA398", fontFamily: "roboto-light" }}
            >
              Learn More
            </button>
          </motion.div>
          <div className=" col-lg-4 mt-5 me-lg-5">
            <img
              src="src/assets/anesu5.jpg"
              alt="anesu nyakonda"
              className="img-fluid border border-secondary mt-3  "
              style={{
                borderRadius: "50%",
                border: "black",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
