const React = require('react');
const {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Timer App</li>
          <li>
            <IndexLink to="/" activeClass="active" activeStyle={{
              fontWeight: 'bold'
            }}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClass="active" activeStyle={{
              fontWeight: 'bold'
            }}>Countdown</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
