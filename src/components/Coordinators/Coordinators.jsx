import React from "react";
import classes from "./Coordinators.module.css";
import deepa from "../../assets/Avatar/Deepa.jpg";
import swayam from "../../assets/Avatar/Swayam.jpg";
import himanshu from "../../assets/Avatar/Himanshu.jpg";
import raj from "../../assets/Avatar/raj.jpg";
import gauravthawait from "../../assets/Avatar/gauravthawait.png";
import bhupesh from "../../assets/Avatar/bhupesh.png";
import om from "../../assets/Avatar/om.jpg";
import prakhar from "../../assets/Avatar/prakhar.jpg";
import praveen from "../../assets/Avatar/praveen.jpg";
import jyoti from "../../assets/Avatar/jyoti.jpg";
import uday from "../../assets/Avatar/uday.jpg";
import sanya from "../../assets/Avatar/sanya.jpg";
import arpita from "../../assets/Avatar/arpita.jpg";
import lisa from "../../assets/Avatar/lisa.jpg";
import abhishek from "../../assets/Avatar/abhishek.jpg";
import shubham from "../../assets/Avatar/shubham.jpg";
import avi from "../../assets/Avatar/avi.jpg";
import manoj from "../../assets/Avatar/manoj.jpg";

import defaultImg from "../../assets/Avatar/Default.png";

const StudentCard = ({ name, image, post, contact }) => {
  return (
    <div className={classes.about}>
      <div className={classes.composition}>
        <img className={classes.images} src={image} alt="about" />
      </div>

      <div className={classes.student}>
        <span className={classes.name}>{name}</span>
        <span className={classes.post}>{post}</span>
        <span className={classes.post}>
          {contact ? `+91 ${contact}` : "+91-88719 XXXXX"}
        </span>
      </div>
    </div>
  );
};

const Coordinators = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.details}>
          <h2 className={classes.heading1}>Know Your Coordinator!</h2>
        </div>
        {/* <section id="about" className={classes.aboutSec}>
          <StudentCard
            name={"Himanshu Yadav"}
            image={himanshu}
            post={"President Cultural"}
            contact={"9755136077"}
          />
          <StudentCard
            name={"Swayam Kumar Karn"}
            image={swayam}
            post={"Vice-President Cultural"}
            contact={"8871990409"}
          />
        </section> */}

        <section id="about" className={classes.aboutSec}>
          <StudentCard
            name={"Gaurav Thawait"}
            image={gauravthawait}
            post={"Coordinator"}
            contact={"9131838493"}
          />
          <StudentCard
            name={"Himanshu Yadav"}
            image={himanshu}
            post={"Coordinator"}
            contact={"9755136077"}
          />
          <StudentCard
            name={"Jyoti Lodha"}
            image={jyoti}
            post={"Coordinator"}
            contact={"7999734461"}
          />
          <StudentCard
            name={"Prakhar Nayak"}
            image={prakhar}
            post={"Coordinator"}
            contact={"9755623903"}
          />
        </section>

        <section id="about" className={classes.aboutSec}>
          <StudentCard
            name={"Rajkumar Dewangan"}
            image={raj}
            post={"Coordinator"}
            contact={"7805972994"}
          />
          <StudentCard
            name={"Avi Kesharwani"}
            image={avi}
            post={"Coordinator"}
            contact={"9993584583"}
          />

          <StudentCard
            name={"Abhishek Sahu"}
            image={abhishek}
            post={"Coordinator"}
            contact={"8718818223"}
          />
          <StudentCard
            name={"Om Yadav"}
            image={om}
            post={"Coordinator"}
            contact={"9301982112"}
          />
        </section>
        <section id="about" className={classes.aboutSec}>
          <StudentCard
            name={"Deeptanshu Shrivastav"}
            image={defaultImg}
            post={"Coordinator"}
            contact={"7828567965"}
          />
          <StudentCard
            name={"Shubham Thakur"}
            image={shubham}
            post={"Coordinator"}
            contact={"9337552686"}
          />
          <StudentCard
            name={"Arpita Singh"}
            image={arpita}
            post={"Coordinator"}
            contact={"9111523272"}
          />
          <StudentCard
            name={"Lisa Gour"}
            image={lisa}
            post={"Coordinator"}
            contact={"6261757589"}
          />
        </section>
        <section id="about" className={classes.aboutSec}>
          <StudentCard
            name={"Praveen Chandrakar"}
            image={praveen}
            post={"Coordinator"}
            contact={"9993648155"}
          />
          <StudentCard
            name={"Uday"}
            image={uday}
            post={"Coordinator"}
            contact={"8269639939"}
          />
          <StudentCard
            name={"Kunal Nirmalkar"}
            image={defaultImg}
            post={"Coordinator"}
            contact={"6267744424"}
          />
          <StudentCard
            name={"Bhupesh"}
            image={bhupesh}
            post={"Coordinator"}
            contact={"7805961692"}
          />
        </section>
        <section id="about" className={classes.aboutSec}>
          <StudentCard
            name={"Hriddesh"}
            image={defaultImg}
            post={"Coordinator"}
            contact={"9479042671"}
          />
          <StudentCard
            name={"Swayam Kumar Karn"}
            image={swayam}
            post={"Coordinator"}
            contact={"8871990409"}
          />
          <StudentCard
            name={"Deepa Kunwar"}
            image={deepa}
            post={"Coordinator"}
            contact={"9644395129"}
          />
          <StudentCard
            name={"Sanya Somwar"}
            image={sanya}
            post={"Coordinator"}
            contact={"8463078952"}
          />
        </section>
        <section id="about" className={classes.aboutSec}>
          <StudentCard
            name={"Priyanshu Anand"}
            image={defaultImg}
            post={"Coordinator"}
            contact={"9301667800"}
          />
          <StudentCard
            name={"Asad Ahmad"}
            image={defaultImg}
            post={"Coordinator"}
            contact={"9407947314"}
          />
          <StudentCard
            name={"Manoj"}
            image={manoj}
            post={"Coordinator"}
            contact={"7974626415"}
          />

          <StudentCard
            name={"Nikhil Verma"}
            image={defaultImg}
            post={"Coordinator"}
            contact={"6264714906"}
          />
        </section>
      </div>
    </>
  );
};

export default Coordinators;
