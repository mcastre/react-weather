var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.searchLocation.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.searchLocation.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }

  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" dataDropdownMenu>
            <li className="menu-text">React Weather</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="searchLocation" placeholder="Search weather by city..." />
              </li>
              <li>
                <button type="submit" className="button" value="Search">Search</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
