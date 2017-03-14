var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location)
      .then(function (temp) {
        that.setState({
          location,
          temp,
          isLoading: false
        });
      }, function (err) {
        that.setState({
          isLoading: false,
          errorMessage: err.message
        });
      });
  },
  render: function () {
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}></WeatherMessage>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}></ErrorModal>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        { renderMessage() }
        { renderError() }
      </div>
    );
  }
});

module.exports = Weather;
