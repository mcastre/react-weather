var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

// Stateless Functional Component
var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string, // can be optional
    message: React.PropTypes.string.isRequired // but message is required and must be a string type
  },
  componentDidMount: function () {
    var { title, message } = this.props;
    var modalMarkup = (
      <div
        id="error_modal"
        className="reveal tiny text-center"
        data-reveal=""
        data-animation-in="slide-in-down"
        data-animation-out="slide-out-up">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));

    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error_modal'));
    modal.open();
  },
  render: function () {
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
