import React from 'react';
class Login extends React.Component {
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
        this is login
      </div>
    )
  }
}

//问题1 ： 为何需要default
export default Login;