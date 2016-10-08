const React = require('react');

const Clock = require('Clock');
const Controls = require('Controls');
const CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

    }, 1000);
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function () {
    let {count, countdownStatus} = this.state;
    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    }
    return (
      <div>
        <Clock totalSeconds={count}/>
        { renderControlArea() }
      </div>
    );
  }
});

module.exports = Countdown;
