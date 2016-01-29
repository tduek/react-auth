var React =require('react');
var ReactDOM =require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/app');
var UsersIndex = require('./components/users/users_index');
var UserShow = require('./components/users/user_show');
var PostsIndex = require('./components/posts/posts_index');
var SessionForm = require('./components/sessions/new');
var UserForm = require('./components/users/user_form');
var CurrentUserStore = require('./stores/current_user_store');

var router = (
  <Router>
    <Route path="/" component={ App } onEnter={_ensureLoggedIn}>
      <IndexRoute component={ UsersIndex } onEnter={_ensureLoggedIn} />
      <Route path="login" component={ SessionForm }/>
      <Route path="users/new" component={ UserForm } />
      <Route path="users/:id" component={ UserShow } />
      <Route path="posts" component={ PostsIndex } />
    </Route>
  </Router>
);

// make `_ensureLoggedIn` the `onEnter` prop of
// routes that requires User Auth (see line 17)
function _ensureLoggedIn(nextState, replace, callback) {
  // the third `callback` arg allows us to do async 
  // operations before the route runs. Router will wait
  // for us to call it before actually routing
  
  if (CurrentUserStore.userHasBeenFetched()) {
    _redirectIfNotLoggedIn(); // this function below
  } else {
    // currentUser has not been fetched
    // lets fetch them and then see if 
    // we have to redirect or not
    SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  }
  
  function _redirectIfNotLoggedIn() {
    if (!CurrentUserStore.isLoggedIn()) {
      replace({}, "/login");
    }
    callback(); // Always call the callback.
                // The router doesn't actually run the
                // route until you do call it.
  }
};



window.init = function () {
  ReactDOM.render(router, document.getElementById('content'));
};
