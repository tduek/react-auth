var React = require('react');
var CurrentUserStore = require('./../stores/current_user_store');

var Header = React.createClass({

  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },
  
  logout: function () {
    
  },

  render: function() {
    if (CurrentUserStore.isLoggedIn()) { // if we're logged in....
      return (
        <div>
          Logged in as
          { this.state.currentUser.email }
          <button onClick={ this.logout }>LOG OUT</button>
        </div>
      );
    } else {
      return ( 
        <div>
          <a href="#/login">Login</a> 
        </div>
      );
    }
    
  },

});

module.exports = Header;
