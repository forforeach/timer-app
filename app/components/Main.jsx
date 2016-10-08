const React = require('react');
const Nav = require('Nav');

var Main = ({children}) => {
  return (
    <div>
      <Nav />
      <p>Main Component</p>
      {children}
    </div>
  );
};

module.exports = Main;
