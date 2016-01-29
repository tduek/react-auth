var React = require('react');
var SearchResultsStore = require('../stores/search_results_store');
var SearchApiUtil = require('../util/search_api_util');
var UserIndexItem = require('./users/user_index_item');
var PostIndexItem = require('./posts/post_index_item');

var Search = React.createClass({

  componentDidMount: function() {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },
  
  getInitialState: function () {
    return {page: 1, query: ""};
  },
  
  _onChange: function() {
    this.forceUpdate();
  },
  
  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 1);
    
    this.setState({page: 1, query: query});
  },
  
  nextPage: function () {
    var nextPage = this.state.page + 1;
    SearchApiUtil.search(this.state.query, nextPage);
    
    this.setState({page: nextPage});
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {

    var searchResults = SearchResultsStore.all().map(function (searchResult) {
      if (searchResult._type === "User") {
        return <UserIndexItem user={searchResult} />
      } else {
        return <PostIndexItem post={searchResult} />
      }
    });

    return (
      <div>
        <h1 className="title">Search!</h1>
        <input type="text" placeholder="wut u want" onKeyUp={ this.search } />
        Displaying {SearchResultsStore.all().length} of 
        {SearchResultsStore.meta().totalCount}
        <button onClick={this.nextPage}>Next ></button>
        
        <ul className="users-index">{ searchResults }</ul>
      </div>
    );
  },

  
});

module.exports = Search;
