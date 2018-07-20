import React from "react";
import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        margin: 20
      }}
    >
      <strong style={{ marginBottom: "10px" }}>Chef'd Kiosk Concepts</strong>
      <ul>
        <li style={{ cursor: "pointer" }}>
          Option 1: <Link to="/direct-offer">Email Capture</Link>
        </li>
        <li style={{ cursor: "pointer" }}>
          Option 2: <Link to="/engagement-start">Engagements</Link>
        </li>
      </ul>
    </div>
  );
}
