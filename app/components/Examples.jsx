var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div >
      <h1 className="page-title text-center">Examples</h1>
      <p>Here are a few examples to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Birmingham">Birmingham, AL</Link>
        </li>
        <li>
          <Link to="/?location=Melbourne">Melbourne, Australia</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
