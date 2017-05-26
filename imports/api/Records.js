import {Meteor} from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import {check} from 'meteor/check';
import Twitter from "twitter";

//Possible Record structure:
//{query:'something',feels:[{happy:0.8},{sad:0.2}],date:Date,numTweets:124,likes:23,favorites:54}
//Maybe is not a good idea to store all the tweets, instead we could store the number of tweets.
//Advanced records could have fields for dates or places.
export const Records = new Mongo.Collection('records');


Meteor.methods({
  'newQuery'(newQuery)
  {
    check(newQuery, String);
    console.log('arrive the new query: ' + newQuery);

    //Twitter Stuff
    let client = new Twitter({
      consumer_key: 'RkHsyzt7mqV8AkyB1bEco6gjb',
      consumer_secret: 'laPxm7JGQQ6Y404g9G7isa7ntFv1kHw9jFofMBHuE2fQXEXqwE',
      access_token_key: '824384893429891074-RRK2G55hTohv3SXq7k02pUi5zF8tyMG',
      access_token_secret: 'FCVkRiCRBrCuyZt9bG7SZwM9R01yanZ0bPTITxcvmZp79'
    });
    // var client = new Twitter({
    //   consumer_key: process.env.TWITTER_CONSUMER_KEY,
    //   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    //   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    //   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    // });


    //For more information about how I made this :
    // https://blog.meteor.com/using-promises-and-async-await-in-meteor-8f6f4a04f998 and https://ponyfoo.com/articles/understanding-javascript-async-await
    let wholeText='';
    //Make the search in Twitter, assemble the whole text and call the Watson API
    client.get('search/tweets',{q:newQuery}).then(
        (tweets)=>
        {
          numTweets=tweets.statuses.length;
          tweets.statuses.forEach((currentTweet) =>
          {
            wholeText += currentTweet.text + '\n';
          });
          //Watson stuff
          let watson = require('watson-developer-cloud');
          let tone_analyzer = watson.tone_analyzer({
            username: 'cad4dd01-cbfe-4296-bb22-03b6020b4455',
            password: 'oF2rWPl45JkA',
            version: 'v3',
            version_date: '2016-05-19'
          });
          console.log('Texto enviado: '+wholeText);
          tone_analyzer.tone({
            text: wholeText
          }, function(err, tone) {
            if (err) {
              console.log(err);
            } else {
              Records.rawCollection().insert(
                  {
                    query: newQuery,
                    lastModification:new Date(),
                    numTweets:tweets.statuses.length,
                    favs:0,
                    upvotes:0,
                    feelings: tone,

                  }
              );
              return tone;
            }
          });
        });
  },
  'favorite'(recordId)
  {
    let owner = this.userId;
    let username = Meteor.users.findOne(this.userId).username;
    console.log("hace favorito de " + username);
    Records.update({_id: owner }, {$push: { favorites: recordId }});
  },
  'love'(recordId)
  {
    console.log("llega a love");
    Records.update({_id: recordId }, { $inc: { upvotes: 1 }} );
  },
  'recentForCurrentUser'()
  {
    console.log("llega a recent for current user");
  },
});
