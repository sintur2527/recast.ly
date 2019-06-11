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
      videoList: [],
      currentVideo: exampleVideoData[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getSearchResults('lil wayne');
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  getSearchResults(searchTerm) {
    searchYouTube(
      {
        query: searchTerm,
        max: 5,
        key: youtubeApiKey
      },
      video => {
        this.setState({
          videoList: video
        });
      }
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search onSubmit={search => this.getSearchResults(search)} />
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
