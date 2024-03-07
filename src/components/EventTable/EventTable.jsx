import React, { useState } from "react";
import players from "./player";
import "./EventTable.css"

const MyTable = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleExpand = (player) => {
    const newExpandedRows = [...expandedRows];
    const idxFound = newExpandedRows.findIndex((id) => id === player.id);

    if (idxFound > -1) {
      newExpandedRows.splice(idxFound, 1);
    } else {
      newExpandedRows.push(player.id);
    }

    setExpandedRows([...newExpandedRows]);
  };

  const isExpanded = (player) => {
    const idx = expandedRows.find((id) => id === player.id);
    return idx > -1;
  };

  const expandAll = (players) => {
    if (expandedRows.length === players.length) {
      setExpandedRows([]);
    } else {
      const newExpandedRows = players.map((player) => player.id);
      setExpandedRows([...newExpandedRows]);
    }
  };

  const getRows = (player) => {
    let rows = [];
    const projects = player.projects || [];

    const firstRow = (
      <tr key={player.id}>
        <td>{player.firstName}</td>
        <td>{player.lastName}</td>
        <td>{player.team}</td>
        <td>
          {projects.length > 0 && (
            <button onClick={() => handleExpand(player)}>
              {isExpanded(player) ? "-" : "+"}
            </button>
          )}
        </td>
      </tr>
    );

    rows.push(firstRow);

    if (isExpanded(player) && projects.length > 0) {
      const projectRows = projects.map((project) => (
        <tr key={project.id} className="player-details">
          <td className="player-details" />
          <td colSpan="3" className="player-details">
            <br />
            <div className="attribute">
              <div className="attribute-name">Toggle Here: </div>
              <div className="attribute-value">{project.name}</div>
            </div>
            <br />
          </td>
        </tr>
      ));

      rows.push(projectRows);
    }

    return rows;
  };

  const getPlayerTable = (players) => {
    const playerRows = players.map((player) => {
      return getRows(player);
    });

    return (
      <table className="my-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Time</th>
            <th>Location</th>
            <th onClick={() => expandAll(players)}>
              <button>
                {players.length === expandedRows.length ? "-" : "+"}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{playerRows}</tbody>
      </table>
    );
  };

  return <div>{getPlayerTable(players)}</div>;
};

export default MyTable;
