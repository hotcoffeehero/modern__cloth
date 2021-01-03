
var admin = require("firebase-admin");

var serviceAccount = require("../config/fb_service_account_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin