import React, { useRef, useState } from "react";
import "./App.css";
//import { SwipeEventListener } from "swipe-event-listener";

const App = () => {
  const [state, setstate] = useState(false);
  const ulRef = useRef();
  // const { swipeArea } = SwipeEventListener({
  //   swipeArea: document.querySelector("header"),
  // });
  // swipeArea.addEventListener("swipeRight", () => {
  //   console.log("swipe right");
  //   setstate(true);
  // });
  const handle = () => {
    console.log(ulRef);
    setstate(true);
  };

  return (
    <header className="container">
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
      <nav id="navbar">
        <ul
          draggable={true}
          className={state ? "ul" : ""}
          ref={ulRef}
          onDrag={handle}
        >
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default App;
