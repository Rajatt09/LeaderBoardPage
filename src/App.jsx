import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dash from "./Dash";
import { HiMiniTrophy } from "react-icons/hi2";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  const [count, setCount] = useState(0);
  const disableLeaderboard = window.matchMedia(
    "(max-aspect-ratio: 3/4)"
  ).matches;

  return (
    <>
      <br />

      <h1
        style={{
          color: "#374151",
          textAlign: "center",
        }}
      >
        <HiMiniTrophy
          className="trophy1"
          style={{
            position: "relative",
            top: "7px",
            fontSize: "40px",
            color: "#FCC201",
          }}
        />{" "}
        &nbsp;
        <span
          className="leaderboard"
          style={{
            borderLeft: "8px solid #374151",
            borderRadius: "50%",
            padding: "10px 40px",
            borderRight: "8px solid #374151",
          }}
        >
          LEADERBOARD
        </span>{" "}
        &nbsp;
        <HiMiniTrophy
          className="trophy2"
          style={{
            position: "relative",
            top: "7px",
            fontSize: "40px",
            color: "#FCC201",
          }}
        />
      </h1>
      <br />
      <PrimeReactProvider>
        <Dash />
      </PrimeReactProvider>
    </>
  );
}

export default App;
