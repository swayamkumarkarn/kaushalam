// import Button from "../common/Button/Button";
import classes from "./Principal.module.css";
import about from "../../assets/Avatar/Principal.jpg";

const Principal = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>

          <div className={classes.details}>
            <h3 className={classes.heading}>Respected,</h3>
            <h2 className={classes.heading1}>Dr. B.S.Chawla</h2>
            <p className={classes.para}>
              We extend sincere thanks for granting permission to organize
              Kaushalam 2k24. Your support allows us to celebrate talents,
              foster creativity, and create lasting memories. We are grateful
              for your encouragement in making this event possible.
              <br /> <br /> Heartfelt gratitude for orchestrating the phenomenal
              event. Your visionary leadership in curating a festival
              blending singing, dancing, technical brilliance, and fun games has
              created lasting memories for our college community. Your
              commitment to holistic development is truly appreciated.
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
            {/* <div className={classes.btn}>
            <Button label="Explore" />
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Principal;
