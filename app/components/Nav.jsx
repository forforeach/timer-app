const React = require('react');
const {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active">Countdown</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
