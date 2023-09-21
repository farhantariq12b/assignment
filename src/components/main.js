import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "97vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Link to="/contacts">
          <button
            className="btn btna"
            style={{ width: "160px", borderRadius: "10px" }}
          >
            Modal A
          </button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Link to="/all-contacts">
          <button
            className="btn btnb "
            style={{ width: "160px", borderRadius: "10px" }}
          >
            Modal B
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
