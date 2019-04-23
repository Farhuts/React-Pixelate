import React from 'react';

import { Grid } from './Grid';
import { SelectBtn } from './SelectBtn';

const ComponentForApp = ({addRow, clearBoard, toggleCellColor, setColorVal, colVal, board}) => {
  return (
    <div>
    <h1>Reactive Pixel Board</h1>
        <button id="add-row" onClick={addRow}>
          Add a row
        </button>
        <button id="clear" onClick={clearBoard}>
          Clear
        </button>
        <button id="paint-all" onClick={toggleCellColor}>
          Paint All
        </button>
        <SelectBtn setColorVal={setColorVal} colVal={colVal} />
        <Grid
          board={board}
          colorVal={colVal}
          toggleCellColor={toggleCellColor}
        />
    </div>
  )
}

 export default ComponentForApp
