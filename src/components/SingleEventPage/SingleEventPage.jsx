import React, { useEffect, useState } from "react";
import classes from "./SingleEventPage.module.css";
import Button from "../common/Button/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleEventPage = () => {
  const { eventId } = useParams();
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    window.open(link, "_blank");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbwUJL1RAvBWtTwhORuRAwk128lAENwUoIFN--LFsuF_txT7yWmXI2P0KeVnJOtcuaxd/exec"
        );
        setEventsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{height:"50%"}}>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const requiredEvent = eventsData.find((event) => event.id === +eventId);
  const {
    name,
    image,
    image1,
    description,
    rules,
    note,
    prizes,
    team,
    fees,
    contactInfo,
    location,
    date,
    link,
    onSpot,
    disqualification,
  } = requiredEvent;

  return (
    <>
      <div className={classes.singleEvent}>
        <div className={classes.singleEventCard}>
          <div className={classes.col1}>
            <img
              className={classes.eventPoster}
              src={image1 ? image1 : image}
              alt="eventName"
            />
          </div>
          <div className={classes.col2}>
            <h1 className={classes.eventHeading}>{name}</h1>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Description</h2>
              <p className={classes.content}>{description}</p>
            </div>
            <div className={classes.rowcol}>
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Team</h2>
                <p className={classes.content}>{team}</p>
              </div>
              {/* <div className={classes.subheading}>
                <h2 className={classes.heading}>Fees</h2>
                <p className={classes.content}>{fees}</p>
              </div> */}
            </div>
            {prizes && (
              <div className={classes.subheading}>
                <h2 className={classes.headingp}>Prizes</h2>
                <ul>
                  {prizes?.map((prize, i) => (
                    <li key={i} className={classes.content}>
                      {prize}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(rules?.length !==0 ) && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Rules and Regulations</h2>
                <ul>
                  {rules?.map((rule, i) => (
                    <li key={i} className={classes.content}>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {disqualification && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Disqualification</h2>
                <ul>
                  {disqualification?.map((rule, i) => (
                    <li key={i} className={classes.content}>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={classes.subheading}>
              <h2 className={classes.heading}>Location</h2>
              <p className={classes.content}>
                {location ? location : "Reveal Soon"}
              </p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Date and Timing</h2>
              <p className={classes.content}>{date ? date : "Reveal Soon"}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Contact Info</h2>
              {contactInfo?.map((contact, i) => (
                <p key={i} className={classes.content}>
                  {contact}
                </p>
              ))}
            </div>
            {(note?.length!==0) && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Note</h2>
                {note?.map((line, i) => (
                  <p key={i} className={classes.content}>
                    {line}
                  </p>
                ))}
              </div>
            )}
            {link !== "" ? (
              <a href={link} style={{zIndex:30}}>
                <Button label="Register" onClick={handleButtonClick}/>
              </a>
            ) : onSpot !== "" ? (
              <p className={classes.soon}>Registration will be open soon </p>
            ) : (
              <p className={classes.soon}>Registration will be open soon.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
