var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'sEBJUH1GmZ9yGSoY1yHGBlL7z',
    consumer_secret: '0MpUaA8yg00pP9auwJMGUW9IgvPdoEEQwRC0wJEExNMnCeYNZf',
    access_token_key: ' 291727736-bibAtqx7UjvjMDisXl6UOFtQE5ciO665eLxrCHMv',
    access_token_secret: 'BVVlbqCdcWJoUzlsB4rorfBnu9TIdBTHaGwgo79HU5sJr'
});


module.exports.getLatestTweetsByHashtag = function(hashtags, callback){
  //here hashtags is an array in the form: [#cheese, #bacon]
  var hashtagsToString = hashtags.join(" ");
  var encodedHashtags = encodeURIComponent(hashtags).replace(/%20/g, '+');
  client.get('search/tweets.json', {
    q: encodedHashtags,
    result_type: 'recent',
    include_entities: true
  }, function(error, tweets, response) {
    if (error) return callback(error);
    else return callback(undefined, tweets.statuses);
  });
}