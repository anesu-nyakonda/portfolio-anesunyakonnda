import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

function Services() {
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
      <div className="container mb-5 ">
        <h6
          className="display-6 fw-normal ms-2  text-center"
          style={{ color: "#383838", fontFamily: "roboto-bald" }}
        >
          My{" "}
          <span style={{ color: "#EDA398", fontFamily: "roboto-bald" }}>
            Services
          </span>{" "}
        </h6>

        <div
          ref={ref}
          className="row justify-content-between container-fluid  mt-5 "
        >
          <motion.div
            className="ms-1 col-sm-3 shadow-lg rounded text-center  mt-5 mb-5"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              color: "#ADA5A5",
              fontFamily: "lora-regular",
              backgroundColor: "#383838",
            }}
          >
            <img
              src="src/assets/coding.png"
              alt="web dev"
              className="img-fluid text-center mt-3"
            />
            <h6
              className="mt-3"
              style={{
                color: "#ffffff",
                fontFamily: "roboto-bold",
              }}
            >
              web development
            </h6>
            <p style={{ fontFamily: "lora-regular", color: "#949090" }}>
              I create responsive websites that offer the very best user
              experience
            </p>
            <button
              className="btn mt-2 mb-3 btn-sm"
              style={{ backgroundColor: "#EDA398", fontFamily: "roboto-light" }}
            >
              Learn more
            </button>
          </motion.div>
          <motion.div
            className=" ms-1 col-sm-3 rounded text-center mt-5 mb-5"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              color: "#ADA5A5",
              fontFamily: "lora-regular",
              backgroundColor: "#383838",
            }}
          >
            <img
              src="src/assets/webDev.png"
              alt="web dev"
              className="img-fluid text-center mt-3"
            />
            <h6
              className="mt-3"
              style={{
                color: "#ffffff",
                fontFamily: "roboto-bold",
              }}
            >
              UI/UX design
            </h6>
            <p style={{ fontFamily: "lora-regular", color: "#949090" }}>
              partner with me and i will design your dream website
            </p>
            <button
              className="btn mt-2 mb-3 btn-sm"
              style={{ backgroundColor: "#EDA398", fontFamily: "roboto-light" }}
            >
              Learn more
            </button>
          </motion.div>
          <motion.div
            className="ms-1 col-sm-3 rounded text-center mt-5 mb-5"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              color: "#ADA5A5",
              fontFamily: "lora-regular",
              backgroundColor: "#383838",
            }}
          >
            <img
              src="src/assets/unity.png"
              alt="web dev"
              className="img-fluid text-center mt-3"
            />
            <h6
              className="mt-3"
              style={{
                color: "#ffffff",
                fontFamily: "roboto-bold",
              }}
            >
              {" "}
              Game development
            </h6>
            <p
              className="fw-light"
              style={{ fontFamily: "lora-regular", color: "#949090" }}
            >
              I also make robust and well optimised mobile games in unity lol
            </p>
            <button
              className="btn mt-2 mb-3 btn-sm"
              style={{ backgroundColor: "#EDA398", fontFamily: "roboto-light" }}
            >
              Learn more
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default Services;
