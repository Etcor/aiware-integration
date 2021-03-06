import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => {
        if (res.status === 200) {
          this.setState({
            message: "Connection Success!",
            isLoading: false
          })
        }
      })
  }

  render() {
    return this.state.isLoading
      ? <h1>Test connections...</h1>
      : <h1>{ this.state.message }</h1>;
  }
}
