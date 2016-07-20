import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import hbs from 'express-handlebars';
import passport from 'passport';
import express from 'express';

export default function(app, db) {
  app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'splash',
    layoutsDir: path.join(__dirname, 'views/templates/'),
    partialsDir: path.join(__dirname, 'views/partials/')
  }));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, user[0].id);
  });

  passport.deserializeUser(function(id, done) {
    db.findUser({id: id })
      .then((user) => done(null, user))
      .catch((err) => done(err, null));
  });

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../build')));
  app.use(express.static(path.join(__dirname, '/../node_modules')));
  app.use(express.static(path.join(__dirname, './views')));
  app.use(express.static(path.join(__dirname, './server-test')));
  app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

}
