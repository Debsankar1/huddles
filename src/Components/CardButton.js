import React from 'react';

import ReactDOM from 'react-dom' ;

class LightSwitch extends React.Component {
  
    state = {
      active: false,
    }
    
    render() {
      return (
        <div>
          <div className="card">
            <div
              className={ this.state.active ? "card switch-on" : "card switch-off" }
              onClick={() => this.setState({active: !this.state.active})}>
              { this.state.active ? 'on' : 'off' }
            </div>
          </div>
          <div className={ this.state.active? "bg-light light-on": "bg-light light-off" } />
        </div>
      );
    }
  }
      
  ReactDOM.render(
    <LightSwitch />,
    document.getElementById('main')
  )