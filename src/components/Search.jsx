var Search = props => (
  <form onSubmit={props.onSubmit}>
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={props.onChange} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search" />
      </button>
    </div>
  </form>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
