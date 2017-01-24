var homePageController = require('../controllers/homePage_controller');

module.exports = function(app) {
  app.get('/', homePageController.customer);
  app.get('/admin', homePageController.businessAdmin)
  app.get('/*', (req, res) => {
    res.redirect('/');
  });
}