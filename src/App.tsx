import { useState } from "react";
import * as React from "react";
import "./App.scss";

import Template from "./features/hoodie/Template";

function App() {
  const [active, setActive] = useState<string | null>(null);
  const [colors, setColor] = useState({
    top: "#ffffff",
    middle: "#ffffff",
    bottom: "#ffffff",
  });

  return (
    <div className="App">
      <div
        className="container"
        style={{
          width: 300,
        }}
      >
        <input
          className="input"
          type="color"
          onInput={({ currentTarget: { value } }) =>
            setColor((prevState) => ({
              ...prevState,
              ...(active ? { [active as string]: value } : {}),
            }))
          }
          name="color"
        />
        <Template
          active={active}
          colors={colors}
          onClick={(e: any) =>
            setActive(e.currentTarget.id ? e.currentTarget.id : null)
          }
        />
      </div>
    </div>
  );
}

export default App;
