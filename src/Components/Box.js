import React from 'react';

export const Box = props => {
  const boxStyle = {
    borderStyle: 'solid',
    width: '100px',
    height: '100px',
    marginLeft: '20px',
    marginTop: '20px',
    backgroundColor: props.boxColor,
    float: 'left',
    display: 'block',
  };
  return <div style={boxStyle} onClick={props.removeBox(props.index)} />;
};
