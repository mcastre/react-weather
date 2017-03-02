var React = require('react');

var WeatherMessage = ({temp, location}) => { // Can destructure right inside the params
  return (
    <p>It's {temp} degrees in {location}.</p>
  );
};

module.exports = WeatherMessage;
