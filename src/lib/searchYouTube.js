var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet, id',
      q: options.query,
      type: 'video',
      maxResults: options.max,
      key: options.key
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.log('Error in the get request', error);
    }
  });
};

export default searchYouTube;
