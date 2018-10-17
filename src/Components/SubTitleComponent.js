import React, {Component} from 'react';

export default class SubTitleComponent extends Component {
  render() {
    const langStyle = {
      fontSize: this.props.size,
      fontWeight: 'bold',
      color: this.props.color,
    };
    return (
      <div>
        I will be teaching you{' '}
        <span style={langStyle}>{this.props.framework}</span> today.
      </div>
    );
  }
}
