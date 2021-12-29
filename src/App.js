import React, { useState } from "react";
import "./App.css";
import { useSwipeable } from "react-swipeable";

const App = () => {
  const [state, setstate] = useState(false);
  const handlers = useSwipeable({
    onSwipedRight: () => {
      setstate(true);
      console.log("swiped");
    },
  });

  return (
    <header className="container">
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
      <nav {...handlers}>
        <ul className={state ? "ul" : ""}>
          <li>Home</li>
          <li>About</li>
        </ul>
        <ul className={state ? "ul2" : "none"}>
          <li>Home-2</li>
          <li>About-2</li>
        </ul>
      </nav>
    </header>
  );
};

export default App;
