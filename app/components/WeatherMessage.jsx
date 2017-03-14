var React = require('react');

var WeatherMessage = ({temp, location}) => { // Can destructure right inside the params
  return (
    <h3 className="text-center">It's <span className="stat">{temp}</span> degrees in {location}.</h3>
  );
};

module.exports = WeatherMessage;
