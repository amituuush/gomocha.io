var path = require('path');

module.exports = {
  customer: function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'customer.html'));
    
  },

  businessAdmin: function (req, res) {
      res.sendFile(path.join(__dirname, '../public', 'business-admin.html'));
  }
}