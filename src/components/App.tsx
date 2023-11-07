import { useState } from 'react';
import CanvasProvider from '../contexts/CanvasContext';
import ChestsProvider from '../contexts/ChestsContext';
import HeroProvider from '../contexts/HeroContext';
import ScoreboardProvider from '../contexts/ScoreboardContext';
import { GAME_SIZE } from '../settings/constants';
import './App.css';
import Board from './Board';
import Debugger from './Debugger';

function App() {
  const [isEnabled] = useState(false);
  return (
    <div className="App">
      <div
        style={{
          position: "relative",
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
      >
        <CanvasProvider>
          <ChestsProvider>
            <ScoreboardProvider>
              <HeroProvider>
                {isEnabled === true ? <Debugger /> : <></>}
                <Board />
              </HeroProvider>
            </ScoreboardProvider>
          </ChestsProvider>
        </CanvasProvider>
      </div>
    </div>
  );
}

export default App;
