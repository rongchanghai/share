import React from 'react';
class Logout extends React.Component {
  constructor(porps) {
    super(porps);
    this.state = {}
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <div>
        this is Logout
      </div>
    )
  }
}

export default Logout;