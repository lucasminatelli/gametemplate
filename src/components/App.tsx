import CanvasProvider from '../contexts/CanvasContext';
import { GAME_SIZE } from '../settings/constants';
import './App.css';
import Board from './Board';
import Debugger from './Debugger';

function App() {
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
          <Debugger />
          <Board />
        </CanvasProvider>
      </div>
    </div>
  );
}

export default App;
