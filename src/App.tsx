import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

import {
  Provider,
  FullScreen,
  useFullScreenHandle,
  VariantType,
  enqueueSnackbar
} from "@trying-dev/power-common"

function App() {
  const [count, setCount] = useState(0)

  const handle = useFullScreenHandle()
  const { active, enter, exit } = handle

  const enterFullScreen = () => {
    enter()
  }

  const exitFullscreen = () => {
    exit()
  }

  const executeVariant = (variant: VariantType) => {
    enqueueSnackbar(variant, { variant })
  }

  return (
    <Provider>
      <FullScreen {...{ handle }}>
        <div className="App">
          <div>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </div>
          <div>
            <div className="Notifications">
              <h2>Notifications</h2>
              <ul>
                <li>
                  <button onClick={() => executeVariant("default")}>
                    default
                  </button>
                </li>
                <li>
                  <button onClick={() => executeVariant("success")}>
                    Success
                  </button>
                </li>
                <li>
                  <button onClick={() => executeVariant("error")}>Error</button>
                </li>
                <li>
                  <button onClick={() => executeVariant("warning")}>
                    Warning
                  </button>
                </li>
                <li>
                  <button onClick={() => executeVariant("info")}>Info</button>
                </li>
              </ul>
            </div>
            <div className="FullScreenControls">
              <h2>Fullscreen</h2>
              {active ? (
                <button onClick={exitFullscreen}>return</button>
              ) : (
                <button onClick={enterFullScreen}>open full screen</button>
              )}
            </div>
          </div>
        </div>
      </FullScreen>
    </Provider>
  )
}

export default App
