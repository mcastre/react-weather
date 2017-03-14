var React = require('react');

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
    var modal = new Foundation.Reveal($('#error_modal'));
    modal.open();
  },
  render: function () {
    var { title, message } = this.props;
    
    return (
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
  }
});

module.exports = ErrorModal;
