import React from "react";
import wa from "../assets/images/Image 65.png";
import "../assets/styles/whatsapp.css";

const WhatsApp = ({ show, setShow }) => {
    return (
        <div>
            <div className="whatsapp">
                <img
                    src={wa}
                    alt=""
                    style={{ height: "63px", width: "63px", cursor: "pointer" }}
                    onClick={() => setShow(!show)}
                />
            </div>
        </div>
    );
};

export default WhatsApp;
