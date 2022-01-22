import { MouseEvent, useCallback, useState } from "react";
import * as React from "react";
import "./App.scss";
import Colors from "./features/Colors/Colors";

import Template from "./features/hoodie/Template";
import { HoodieRegions, TColorState } from "./features/types";

function App() {
  const [active, setActive] = useState<HoodieRegions | null>(null);
  const [colors, setColor] = useState<TColorState>();

  /*
  {
    [HoodieRegions.Top]: null,
    [HoodieRegions.Middle]: null,
    [HoodieRegions.Bottom]: null,
  }
   */

  const handleClickColor = useCallback(
    (color: string) => {
      if (active) {
        setColor((prev) => ({
          ...prev,
          [active]: color,
        }));
      }
    },
    [active]
  );

  return (
    <div className="App">
      <div
        className="container"
        style={{
          width: "80vw",
        }}
      >
        {/*<input*/}
        {/*  className="input"*/}
        {/*  type="color"*/}
        {/*  onInput={({ currentTarget: { value } }) =>*/}
        {/*    setColor((prevState) => ({*/}
        {/*      ...prevState,*/}
        {/*      ...(active ? { [active as string]: value } : {}),*/}
        {/*    }))*/}
        {/*  }*/}
        {/*  name="color"*/}
        {/*/>*/}
        <h1>play_gravity</h1>
        <Colors onClick={handleClickColor} />
        <Template
          colors={colors}
          onClick={(e: MouseEvent<SVGGElement>) =>
            setActive(
              e.currentTarget.id ? (e.currentTarget.id as HoodieRegions) : null
            )
          }
        />
      </div>
    </div>
  );
}

export default App;
