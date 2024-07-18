import React from "react";
import "../assets/styles/enquire.css";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Enquire = () => {
    return (
        <div className="containereq">
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
                <h2 className="title">ENQUIRE NOW</h2>
            </motion.div>

            <div className="flexbox1eq">
                <div>
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
                        <input type="text" placeholder="Name*" />
                    </motion.div>
                </div>

                <div>
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
                        <input type="text" placeholder="Email Id*" />
                    </motion.div>
                </div>

                <div>
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
                        <input type="text" placeholder="Contact No.*" />
                    </motion.div>
                </div>
            </div>

            <div className="flexbox2eq">
                <div>
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
                        <input type="text" placeholder="Message" />
                    </motion.div>
                </div>

                <button className="submit">
                    <span>SUBMIT</span>

                    <div>
                        <FaArrowRight size={28} />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Enquire;
