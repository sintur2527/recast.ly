import youtubeApiKey from '../config/youtube.js';
import Search from '../components/Search.js';

var searchYouTube = (options, callback) => {
  // TODO

  $.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet, id',
      q: options.query,
      type: 'video',
      key: options.key
    },
    function(data) {
      console.log('this is the data', data.items);
    }
  );

  callback(data);
};

export default searchYouTube;
