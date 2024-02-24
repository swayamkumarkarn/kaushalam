import React,{useState,useEffect,useRef} from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
// import text_img from "./text.svg";
import PureLogo from "../../assets/PureLogo4.png"


const Hero = () => {
  const [countDays, setDays] = useState(false);
  const [countHours, setHours] = useState(false);
  const [countMinutes, setMinutes] = useState(false);
  const [countSeconds, setSeconds] = useState(false);

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("March 7 2024 18:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          {/* <h1 className={classes.heading}>Kaushalam</h1> */}
          <img src={PureLogo} className={classes.text_img} alt="text_img" />

          <h4 className={classes.caption}>Let&apos;s Bring the Revolution!</h4>
          <p className={classes.date}>March 07-09, 2024</p>
          <Link
            className={classes.anchorBtn}
            // target="_blank"
            rel="noopener noreferrer"
            to="/events"
          >
            <Button
              link="/events"
              label="Explore Our Events"
              className={classes.btn}
            ></Button>
          </Link>
        </div>

        <div className={classes.countdownbox}>
          <div className={classes.countdown}>
            <p>{countDays}</p>
            <p>
              <small>days</small>
            </p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            <p>{countHours}</p>
            <p>hours</p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            <p>{countMinutes}</p>
            <p>min</p>
          </div>

          <span className={classes.column}>:</span>
          <div className={classes.countdown}>
            <p>{countSeconds}</p>
            <p>sec</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
