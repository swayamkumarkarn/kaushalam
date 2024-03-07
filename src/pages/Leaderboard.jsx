import React from "react";
import classes from "./Leaderboard.module.css";
import EventTable from "../components/EventTable/EventTable"

const Leaderboard = () => {
  return (
    <>
      <div className={classes.leaderboard_section}>
        {/* <h1 className={classes.heading}>Leaderboard</h1> */}
        <div>
        <h1 className={classes.heading}>Today&apos;s Events</h1>

        </div>
        {/* <p className={classes.para}>Will be released soon.</p> */}
        <div>
          <EventTable/>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
