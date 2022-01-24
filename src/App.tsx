import * as React from "react";
import { Fragment, MouseEvent, useCallback, useEffect, useState } from "react";
import "./App.scss";
import { useDebounce } from "use-debounce";
import Admin from "./features/Admin/Admin";
import ClientForm from "./features/ClientForm/ClientForm";
import Colors from "./features/Colors/Colors";

import Template from "./features/Template/Template";
import { HoodieRegionsEnum, TColorState, ViewsEnum } from "./features/types";

function App() {
  const [clickedLogoCounter, setClickedLogoCounter] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [view, setView] = useState<ViewsEnum>(ViewsEnum.Template);
  const [active, setActive] = useState<HoodieRegionsEnum | null>(null);
  const [colors, setColor] = useState<TColorState>();

  const [debouncedClickCounter] = useDebounce(clickedLogoCounter, 1000);

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

  const handleLogoClick = useCallback(() => {
    setClickedLogoCounter((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (debouncedClickCounter > 10) {
      console.log("showAdmin");
      setIsAdmin((prev) => !prev);
    } else {
      setClickedLogoCounter(0);
    }
  }, [debouncedClickCounter]);

  return (
    <div className="App">
      <div
        className="container"
        style={{
          width: "80vw",
        }}
      >
        <h1 onClick={handleLogoClick}>play_gravity</h1>
        {isAdmin ? (
          <Admin onBack={() => setIsAdmin(false)} />
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
