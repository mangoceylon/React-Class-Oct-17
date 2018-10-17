import React, {Component} from 'react';

export default class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingColor: true,
    };
  }

  componentDidMount() {
    this.fetchColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.boxColor === 'blue') {
      this.fetchColor('red');
    }
  }

  fetchColor = (color = 'blue') => {
    setTimeout(() => {
      this.setState({
        fetchingColor: false,
      });
      this.props.setFetchedColor(color);
    }, 2000);
  };

  render() {
    return (
      <h3>{this.state.fetchingColor ? 'Fetching Color' : 'Color fetched'}</h3>
    );
  }
}
