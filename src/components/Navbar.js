import React, { useEffect, useState } from "react";
import arrow from "../assets/images/Icon ionic-ios-arrow-down.png";
import "../assets/styles/navbar.css";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const list = [
    {
      id: 1,
      title: "Commercials",
      dropdownitems: [],
    },
    {
      id: 2,
      title: "Long format",
      dropdownitems: ["Lorem 1", "Lorem 2", "Lorem 3"],
    },
    {
      id: 3,
      title: "Shorts & Documentaries",
      dropdownitems: [],
    },
    {
      id: 4,
      title: "Services",
      dropdownitems: ["Lorem ipsum A", "Lorem ipsum B", "Lorem ipsum C"],
    },
    {
      id: 5,
      title: "Careers",
      dropdownitems: [],
    },
    {
      id: 6,
      title: "Gallary",
      dropdownitems: [],
    },
    {
      id: 7,
      title: "Founders",
      dropdownitems: [],
    },
    {
      id: 8,
      title: "Media",
      dropdownitems: [],
    },
  ];

  const [navbar, setNavbar] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavbar(true) : setNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <nav className={navbar ? "navbar-active" : "navbar"}>
        <ul className="ullist">
          {list.map((v) => {
            return (
              <li key={v.id}>
                <div className="navbutton">
                  <p>{v.title}</p>

                  {v.dropdownitems.length !== 0 ? (
                    <img src={arrow} alt="" />
                  ) : null}
                </div>

                {v.dropdownitems.length !== 0 ? (
                  <div
                    className="dropdown-list"
                    style={{
                      background: navbar
                        ? "linear-gradient(to top, #22AD86, #71BF52)"
                        : "transparent",
                    }}
                  >
                    {v.dropdownitems.map((v, i) => {
                      return (
                        <a href="" key={i}>
                          {v}
                        </a>
                      );
                    })}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="sidedrawer-open" onClick={() => setShow(!show)}>
          {show ? <FaXmark /> : <FaBars />}
        </div>
      </nav>

      <div className={show ? "sidedrawer" : "sidedrawer-hidden"}>
        {list.map((v) => {
          return (
            <div className="sidedrawerlist" key={v.id}>
              <div className="sidebutton">
                <p>{v.title}</p>
              </div>

              <div className="sidedrawer-dropdowns">
                {v.dropdownitems.map((v, i) => {
                  return (
                    <a href="" key={i}>
                      {v}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={show ? "backdrop" : "backdrop-hidden"}
        onClick={() => setShow(!show)}
      />
    </div>
  );
};

export default Navbar;
