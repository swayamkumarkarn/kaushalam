// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>Kaushalam 24</h2>
            <p className={classes.para}>
              Kaushalam is our vibrant fest where culture shines brightest,
              surrounded by the spark of technology. It&apos;s a celebration of art,
              music, dance, and heritage, inviting everyone to share, learn, and
              connect. Here, cultural expression takes the lead, enriched by
              tech&apos;s innovative touch.<br/> <br/> Join us at Kaushalam 2024 for an
              unforgettable mix of tradition and future, where your creativity
              takes center stage. Get ready for a cultural extravaganza that&apos;s
              set to make this year truly special. Let&apos;s celebrate, explore, and
              create memories together!
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

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
