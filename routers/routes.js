const Authentication = require('../controllers/authentication');
const homePageController = require('../controllers/homePage_controller');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false })

module.exports = function(app) {
  app.get('/', homePageController.customer);
  app.get('/admin', homePageController.businessAdmin);

  app.post('/signup', Authentication.signup);
  app.post('/login', requireLogin, Authentication.login);

  app.get('/test', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });


  // app.get('/*', (req, res) => {
  //   res.redirect('/');
  // });
}
