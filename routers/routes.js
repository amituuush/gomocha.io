const Authentication = require('../controllers/authentication');
const homePageController = require('../controllers/homePage_controller');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app) {
  app.get('/', homePageController.customer);
  app.get('/admin', homePageController.businessAdmin);

  app.post('/signup', Authentication.signup);

  app.get('/test', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });

  app.get('/*', (req, res) => {
    res.redirect('/');
  });
}