import React from "react";
import "../assets/styles/emailmap.css";
import email from "../assets/images/mail.png";
import linkimg from "../assets/images/link.png";
import share from "../assets/images/Group 1693.png";
import mail from "../assets/images/Group 1694.png";
import contact from "../assets/images/Group 1695.png";
import location from "../assets/images/Group 1696.png";
import { motion } from "framer-motion";

const EmailMap = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="container">
      <div className="flexbox1">
        <div className="box1">
          <motion.div
            style={{ width: "100%" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>
              PLEASE BE FREE TO <br />
              CONTACT US USING THE FORM <br />
              BELOW OR EMAIL DIRECTLY:
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="box2">
            <motion.div variants={buttonVariant}>
              <img src={email} alt="email" />
            </motion.div>

            <motion.div variants={buttonVariant}>
              <img src={linkimg} alt="link" />
            </motion.div>

            <motion.div
              variants={buttonVariant}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src={share} alt="share" />
              <p>Share</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="flexbox2">
        <div className="box3">
          <div className="box3_1">
            {Array.from(Array(5).keys()).map((v) => {
              return (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div>
                    <img src={mail} alt="email" />

                    <p>
                      {v === 4 ? "Accounts Department:" : "Nikhil"} <br />
                      <span>nikhil@lorem.in</span>
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <hr />

          <div className="box3_1">
            <div>
              <img src={contact} alt="contact" />

              <p>
                Telephone directly via: <br />
                +91 00000000
              </p>
            </div>

            <div>
              <img src={location} alt="location" />

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
            </div>
          </div>
        </div>

        <div className="box4">
          <motion.div
            style={{ height: "100%", width: "100%" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 10 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.509456828502!2d72.82216857497535!3d18.997259682191157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1ebf7955555%3A0xae921b092baa1a98!2sTogglehead!5e0!3m2!1sen!2sin!4v1721126712295!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="iframe"
              title="map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmailMap;
