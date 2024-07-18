import React from "react";
import "../assets/styles/whatsapp.css";
import { FaXmark } from "react-icons/fa6";
import ScrollToBottom from 'react-scroll-to-bottom';
import { FaArrowRight } from "react-icons/fa6";

const Modal = ({ show, setShow }) => {
    return (
        <div>
            {show ? (
                <div className="modal">
                    <div className="modal-div">
                        <div className="close-btn">
                            <FaXmark
                                onClick={() => setShow(!show)}
                                style={{ cursor: "pointer" }}
                            />
                        </div>

                        <ScrollToBottom className="MessageContainer">
                            <div className="Messages">
                                <div className={'received'}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>

                                <div className={'sent'}>
                                    <p>Hello</p>
                                </div>
                            </div>
                        </ScrollToBottom>

                        <div className="sendmsg">
                            <input type="text" className="chatinput" placeholder="Type here" />

                            <button className="sendbtn">
                                    <FaArrowRight size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Modal;
