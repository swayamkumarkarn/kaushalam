import React from "react";
import sambhavLogo from "../../assets/Logo.png";
import classes from "./Footer.module.css";

const kaushalam_insta = "https://www.instagram.com/kaushalam_";
const kaushalam_linkedin = "https://www.linkedin.com/";
const kaushalam_twitter = "";

const swayamurl = "https://www.linkedin.com/in/swayam-kumar-karn/";

const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_kaushalam_image_div}>
            <div>
              <img
                className={classes.footer_kaushalam_image}
                src={sambhavLogo}
                alt="sambhavLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_kaushalam}>KAUSHALAM 2K24</h1> */}
            </div>
          </div>
          <p className={classes.footer_kaushalam_description}>
            Kaushalam 24 is One of the Best Festival of Bilaspur. Let&apos;s
            bring the Revolution.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={kaushalam_insta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>
            </div>
            {/* <div>
              <a
                href={kaushalam_linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={kaushalam_twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png"
                  alt=""
                />
              </a>{" "}
            </div> */}
          </div>
        </div>

        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>Government Engineering College, Koni</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            <div>
              <p>8871990409, 9755136077</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p className={classes.mail}>swayamkumarkarn@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          <div>Website designed and created by </div>
          <div>
            
            <a
              href={swayamurl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footer_a_link}
            >
              {" "}Swayam Kumar Karn
            </a>{" "}
          </div>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
