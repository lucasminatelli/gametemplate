import { useState } from 'react';
import CanvasProvider from '../contexts/CanvasContext';
import ChestsProvider from '../contexts/ChestsContext';
import { GAME_SIZE } from '../settings/constants';
import './App.css';
import Board from './Board';
import Debugger from './Debugger';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <div className="App">
      <div
        style={{
          position: "relative",
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
      >
        <div>
          <button style={{
            position: "absolute",
            zIndex: 5,
          }} onClick={() => setIsEnabled(!isEnabled)}>
            Debug
          </button>
        </div>
        <CanvasProvider>
          <ChestsProvider>
            {isEnabled === true ? <Debugger /> : <></>}
            <Board />
          </ChestsProvider>
        </CanvasProvider>
      </div>
    </div>
  );
}

export default App;
