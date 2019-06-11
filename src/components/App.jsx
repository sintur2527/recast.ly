import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import youtubeApiKey from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      search: ''
    };
    this.handleClick = this.handleClick.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount() {
  //   searchYouTube('options', console.log('test'));
  // }
  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      videoList: searchYouTube({
        query: this.state.search,
        max: 5,
        key: youtubeApiKey
      })
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search
                onChange={change => this.handleChange(change)}
                onSubmit={search => this.handleSubmit(search)}
              />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo} />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList
                videos={this.state.videoList}
                onClick={video => this.handleClick(video)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
