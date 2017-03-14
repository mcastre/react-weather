var React = require('react');

// Stateless Functional Component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built using React. The weather data is being brought in from OpenWeatherMap</p>
    </div>
  );
};

module.exports = About;
