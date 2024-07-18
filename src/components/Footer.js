import React from "react";
import "../assets/styles/footer.css";
import yt from "../assets/images/Group 156.png";
import fb from "../assets/images/Group 165.png";
import im from "../assets/images/Group 166.png";
import ln from "../assets/images/Image 1.png";
import { motion } from "framer-motion";

const arr = [yt, fb, im, ln];

const list = ["About Us", "Services", "Media", "Clients", "Careers"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const socialVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Footer = () => {
  return (
    <div className="footer-div">
      <footer>
        <div className="info">
          <motion.div
            style={{ width: "100%" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p>
              Lorem Ipsum is simply <br />
              dummy text of the <br />
              printing and typesetting <br />
              industry. Lorem Ipsum
            </p>
          </motion.div>
        </div>

        <div className="moreinfo">
          <p>MORE INFORMATION</p>
          <br />

          <ul>
            {list.map((v, i) => {
              return (
                <li key={i}>
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {v}
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="socialinfo">
          <p>GET IN TOUCH</p>
          <br />

          <motion.div
            style={{ width: "100%" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="socialicon-div">
              {arr.map((v, i) => {
                return (
                  <motion.div
                    variants={socialVariant}
                    key={i}
                    style={{ width: "100%" }}
                  >
                    <div className="socialicon">
                      <img src={v} alt="" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </footer>

      <hr />
    </div>
  );
};

export default Footer;
