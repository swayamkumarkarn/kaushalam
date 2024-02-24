import React from "react";
import classes from "./EventSection.module.css";
import Button from "../common/Button/Button";
import event from "./event.svg";

const EventSection = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            {/* <h3 className={classes.heading}>About</h3> */}
            <h2 className={classes.heading1}>EVENTS</h2>
            <p className={classes.para}>
              Kaushalam, the spirited festival of our college, is a captivating
              blend of melody, rhythm, technology, and sheer enjoyment. It
              serves as a vibrant canvas where students can explore and showcase
              their diverse talents in singing, dancing, technical prowess, and
              indulge in some light-hearted fun games. The festival fosters a
              dynamic atmosphere, embracing creativity, camaraderie, and a
              shared passion for excellence. Amidst the lively activities, the
              light-hearted fun games add a delightful touch, making Kaushalam
              an immersive celebration of talent, technology, and joyous
              camaraderie.
            </p>

            {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
            <div className={classes.btn}>
              <Button link="/events" label="Explore" />
            </div>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={event} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventSection;
