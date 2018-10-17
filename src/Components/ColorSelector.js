import React from 'react';

export const ColorSelector = props => {
  return (
    <select onChange={event => props.selectColor(event)}>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
    </select>
  );
};
