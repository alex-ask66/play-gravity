import * as React from "react";
import { Fragment, MouseEvent, useCallback, useState } from "react";
import "./App.scss";
import ClientForm from "./features/ClientForm/ClientForm";
import Colors from "./features/Colors/Colors";

import Template from "./features/Template/Template";
import { HoodieRegionsEnum, TColorState, ViewsEnum } from "./features/types";

function App() {
  const [view, setView] = useState<ViewsEnum>(ViewsEnum.Template);
  const [active, setActive] = useState<HoodieRegionsEnum | null>(null);
  const [colors, setColor] = useState<TColorState>();

  const handleTemplateSubmit = useCallback(() => {
    // TODO: Do we need to add any validation?
    setView(ViewsEnum.Form);
  }, []);

  const handleFormSubmit = useCallback(
    (client: any) => {
      console.log("Submitting the App with values", { colors, client });
    },
    [colors]
  );

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
        <h1>play_gravity</h1>
        {view === ViewsEnum.Template && (
          <Fragment>
            <Colors onClick={handleClickColor} />
            <Template
              colors={colors}
              onClick={(e: MouseEvent<SVGGElement>) =>
                setActive(
                  e.currentTarget.id
                    ? (e.currentTarget.id as HoodieRegionsEnum)
                    : null
                )
              }
              onSubmit={handleTemplateSubmit}
            />
          </Fragment>
        )}
        {view === ViewsEnum.Form && (
          <ClientForm
            onBack={() => setView(ViewsEnum.Template)}
            onSubmit={handleFormSubmit}
          />
        )}
        {view === ViewsEnum.Congrats && <div>Congratulations!</div>}
      </div>
    </div>
  );
}

export default App;
