var React = require('react');

var UserIndexItem = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.user.email}
      </li>
    );
  }
});

module.exports = UserIndexItem;
