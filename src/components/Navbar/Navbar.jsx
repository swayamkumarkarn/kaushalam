import React from "react";
import { useState } from "react";
import classes from "./Navbar.module.css";

import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
// import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";
// import Logo from "../../assets/Logo.png";
import Logo from "../../assets/logoadded.png";

import GrabBitBtn from "../common/GrabBitBtn/GrabBitBtn";

const Scroll = require("react-scroll");

const Navbar = () => {
  const Drop = Scroll.Link;
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  // const [drop, setDrop] = useState(false);

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  let loc = useLocation();

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <Drop
            activeClass={classes.active}
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            <Link to="/">
              <img src={Logo} alt="/" className={classes.logo} />
            </Link>
          </Drop>
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li
              className={`${classes.navLink} ${
                loc.pathname === "/" ? classes.linkActive : ""
              }`}
            >
              <Drop
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/">
                  Home
                </Link>
              </Drop>
            </li>
            <li
              className={`${classes.navLink} ${
                loc.pathname === "/about" ? classes.linkActive : ""
              }`}
            >
              <Drop
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/about">
                  About
                </Link>
              </Drop>
            </li>

            <li
              className={`${classes.dropLink}`}
              // onClick={() => setDrop(!drop)}
            >
              <Link to="/events">
                {/* {drop ? <Dropdown click={() => setDrop(!drop)} /> : ""} */}
                Events
                <FontAwesomeIcon
                  size="sm"
                  style={{
                    display: "inline-block",
                    marginLeft: ".3rem",
                    color: "white",
                  }}
                  icon={faArrowDown}
                  fade
                />
              </Link>
            </li>

            <li
              className={`${classes.navLink} ${
                loc.pathname === "/coordinators" ? classes.linkActive : ""
              }`}
            >
              <Drop
                activeClass={classes.active}
                to=""
                spy="true"
              
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/coordinators">
                  Coordinators
                </Link>
              </Drop>
            </li>

            <li
              className={`${classes.navLink} ${
                loc.pathname === "/leaderboard" ? classes.linkActive : ""
              }`}
            >
              <Drop
                activeClass={classes.active}
                to="ambassador"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/leaderboard">
                  Leaderboard
                </Link>
              </Drop>
            </li>

            {/* <li
              className={`${classes.navLink} ${
                loc.pathname === "/contact" ? classes.linkActive : ""
              }`}
            >
              <Drop
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/contact">
                  Contact
                </Link>
              </Drop>
            </li> */}
          </ul>

          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/swayamkumarkarn"
          >
            <div className={classes.btn}>
              <GrabBitBtn label="GitHub" />
            </div>
          </a> */}

          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "white" }}
                size="3x"
              />
            ) : (
              <FiMenu size={20} />
            )}
          </div>
        </div>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          {/* Mobile Page */}

          <ul className={classes.mobileNav}>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="/">
                  Home
                </HashLink>
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/about">
                  About
                </Link>
              </Drop>
            </li>
            <Link to="/events">
              <li
                className={`${classes.mobLink}`}
                onClick={() => setMobile(!mobile)}
              >
                {/* {drop ? (
                <Dropdown
                  click={() => {
                    setDrop(!drop);
                    setMobile(!mobile);
                  }}
                />
              ) : (
                ""
              )} */}
                Events
                <FontAwesomeIcon
                  size="sm"
                  style={{
                    display: "inline-block",
                    marginLeft: ".3rem",
                    color: "white",
                  }}
                  icon={faArrowDown}
                  fade
                />
              </li>
            </Link>

            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/coordinators">
                  Coordinators
                </Link>
              </Drop>
            </li>

            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="ambassador"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/leaderboard">
                  Leaderboard
                </Link>
              </Drop>
            </li>
            {/* <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/contact">
                  Contact
                </Link>
              </Drop>
            </li> */}
          </ul>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/swayamkumarkarn"
          >
            <div className={classes.btn1}>
              <GrabBitBtn label="GitHub" />
            </div>
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
