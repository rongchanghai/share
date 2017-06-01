import React from 'react';
// import './video.sass';
import './video.less';
//或者 require('./vidoe.css')
class Video extends React.Component {
  constructor(porps) {
    super(porps);
    this.state = {}
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <div className="box">
        this is Video
        <div className="in">this.is in</div>
      </div>
    )
  }
}

export default Video;