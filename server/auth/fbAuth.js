var FacebookStrategy = require('passport-facebook').Strategy;
var passport = require('passport');

const FB = {
  APP_ID: process.env.APP_ID,
  APP_SECRET: process.env.APP_SECRET,
  CALLBACK: process.env.CALLBACK
};

console.log(FB);
module.exports.facebookAuthConfig = function(User) {
  passport.use(new FacebookStrategy({
    clientID: FB.APP_ID,
    clientSecret: FB.APP_SECRET,
    callbackURL: FB.CALLBACK,
    enableProof: true,
    profileFields: ['id', 'emails', 'name']
  }, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      return User.findOrCreate({
        name: profile.name.givenName,
        facebookId: profile.id,
        facebookAccessToken: accessToken
      })
      .then((user) => {
        console.log('got it!');
        return done(null, user);
      })
      .catch((err) => done(err, null));
    });
  }
  ));
};

