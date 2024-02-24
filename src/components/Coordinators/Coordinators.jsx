import React from "react";
import classes from "./Coordinators.module.css";
import deepa from "../../assets/Deepa1.jpg";
import swayam from "../../assets/Swayam.jpg";
import himanshu from "../../assets/Himanshu1.jpg";

const Coordinators = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.details}>
          <h2 className={classes.heading1}>Know Your Coordinator!</h2>
        </div>
        <section id="about" className={classes.aboutSec}>
          <div className={classes.about}>
            <div className={classes.composition}>
              <img className={classes.images} src={deepa} alt="about" />
            </div>

            <div className={classes.student}>
              <span className={classes.name}>Deepa Kunwar</span>
              <span className={classes.post}>President</span>
            </div>
          </div>

          <div className={classes.about}>
            <div className={classes.composition}>
              <img className={classes.images} src={himanshu} alt="about" />
            </div>
            <div className={classes.student}>
              <span className={classes.name}>Himanshu Yadav</span>
              <span className={classes.post}>President Cultural</span>
            </div>
          </div>

          <div className={classes.about}>
            <div className={classes.composition}>
              <img className={classes.images} src={swayam} alt="about" />
            </div>
            <div className={classes.student}>
              <span className={classes.name}>Swayam Kumar Karn</span>
              <span className={classes.post}>Vice-President Cultural</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Coordinators;
