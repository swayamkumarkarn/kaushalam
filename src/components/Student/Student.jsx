// import Button from "../common/Button/Button";
import classes from "./Student.module.css";
import deepa from "../../assets/Avatar/Deepa.jpg";
import swayam from "../../assets/Avatar/Swayam.jpg";
import himanshu from "../../assets/Avatar/Himanshu.jpg";

const Student = () => {
  return (
    <>
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
    </>
  );
};

export default Student;
