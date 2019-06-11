import searchYouTube from '../lib/searchYouTube.js';
import youtubeApiKey from '../config/youtube.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDebounced = _.debounce(searchYouTube, 500);
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
    this.handleChangeDebounced(
      {
        query: event.target.value,
        max: 5,
        key: youtubeApiKey
      },
      function(event) {
        console.log('what do we do here');
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search-bar form-inline">
          <input
            className="form-control"
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button className="btn hidden-sm-down">
            <span className="glyphicon glyphicon-search" />
          </button>
        </div>
      </form>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
