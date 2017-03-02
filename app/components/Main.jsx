var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      {props.children}
    </div>
  );
};

module.exports = Main;
