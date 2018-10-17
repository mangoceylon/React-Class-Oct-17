import React, {Component} from 'react';

export const SubTitle = props => {
  const langStyle = {
    fontSize: props.size,
    fontWeight: 'bold',
    color: props.color,
  };

  console.log(this);
  return (
    <div>
      I will be teaching you <span style={langStyle}>{props.framework}</span>{' '}
      today.
    </div>
  );
};
