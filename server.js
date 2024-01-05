//Express setup
const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//const hbs = exphbs.create({ helpers });

//we need to change secret value, Change secure to true once we get things live, leave it false while during development
const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(sess));

//Chooses the handlebars template used by Express.js
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoursDir: `${__dirname}/views/layouts`
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('main', {layout: 'index'});
});

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });