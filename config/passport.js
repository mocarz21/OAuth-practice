const passport = require('passport'); //paczki odpowiedzialnej za możliwość użycia Google jako providera (pośrednika)
const GoogleStrategy = require('passport-google-oauth20').Strategy; //paczki odpowiedzialnej za możliwość użycia Google jako providera (pośrednika)



passport.use(new GoogleStrategy({
    clientID: "738566605967-enjr4ejhi60mhbdufme1him4selvajai.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/auth/google/callback"
  }, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
  console.log(profile)
  }));
  
  // serialize user when saving to session
  passport.serializeUser((user, serialize) => {
    serialize(null, user);
  });
  
  // deserialize user when reading from session
  passport.deserializeUser((obj, deserialize) => {
    deserialize(null, obj);
  });