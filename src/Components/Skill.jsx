import React, { Component } from 'react';

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this._getPosition);
  }

  _getPosition = () => {
    const el = document.getElementById(`skill-${this.props.index}`);
    const winHi = window.innerHeight;

    if (el) {
      const elProps = el.getBoundingClientRect();
      this.setState({ isVisible: elProps.y - winHi + 100 > 0 });
    }
  }

  render() {
    return (
      <div
        className={`skill${!this.state.isVisible ? '' : ' unpop'}`}
        id={`skill-${this.props.index}`}
      >
        <div className='img-frame'>
          <img src={this.props.skill.imgSrc} alt='' onLoad={this._getPosition} />
        </div>
        {this.props.skill.title}
      </div>
    )
  }
}

export default Skill;