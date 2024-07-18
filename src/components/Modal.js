import React from "react";
import "../assets/styles/whatsapp.css";
import { FaXmark } from "react-icons/fa6";

const Modal = ({ show, setShow }) => {
    return (
        <div>
            {show ? (
                <div className="modal" onClick={() => setShow(!show)}>
                    <div className="modal-div">
                        <div className="close-btn">
                            <FaXmark
                                onClick={() => setShow(!show)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>

                        <h3>Future Container</h3>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Modal;
