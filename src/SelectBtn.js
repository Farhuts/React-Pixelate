import React from 'react';

export const SelectBtn = ({setColorVal,  colorVal }) => {
  console.log(colorVal)
  return (
  <select onChange={setColorVal} value={colorVal}>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
)
};
