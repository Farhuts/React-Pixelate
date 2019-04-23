import React, { useState, useEffect } from 'react';
import './Grid.css';
import { Cell } from './Cell';

export const Grid = ({ board, colorVal, toggleCellColor }) => {
  const grid = board.map((row, rowIdx) => {
    return(
        <tr key={rowIdx}>
          {row.map((colIdx, colKey) => {
            return (
              <Cell key={colKey} className={''} />
            )
          })}
        </tr>
    )
  });
  return (
    <table>
      <tbody onClick={toggleCellColor}>{grid}</tbody>
    </table>
  );
};
