import React from "react";
import "../assets/styles/contactus.css";
import home from "../assets/images/free-home-icon-2502-thumb.png";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contact">
        <motion.div
          style={{ width: "100%", display: "flex", alignItems: "center" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={home} alt="" />
          <p>{">"} Contact Us</p>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1>CONTACT US</h1>
      </motion.div>
    </div>
  );
};

export default ContactUs;
