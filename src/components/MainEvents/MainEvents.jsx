import React, { useEffect, useState } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
// import { eventsData } from "../../assets/eventsData";
import ReactGA from "react-ga";
import axios from "axios";

  
const MainEvents = () => {
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 600,
  //       direction: "to-right",
  //     }),
  //   ],
  // });

  const [eventsData,setEventsData] = useState([]);
  const fetchUrl="https://script.google.com/macros/s/AKfycbwUJL1RAvBWtTwhORuRAwk128lAENwUoIFN--LFsuF_txT7yWmXI2P0KeVnJOtcuaxd/exec"
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setEventsData(response.data);
        console.log(eventsData)
      } catch (error) {
      } finally {
      }
    };
    
    fetchData();
  }, []);
  
  
  
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });



  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>Events</h1>
        <img src="x" alt="" />
        <div className={classes.events_container}>
          {eventsData.map((eventData, i) => {
            return <EventCard eventData={eventData} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MainEvents;
