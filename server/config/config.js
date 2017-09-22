//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://mronda:zYb-ctQ-8Fe-pu2@ds127994.mlab.com:27994/rondadb', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyAqDrrL2Na0a0qpBizCMlliLyeOstYgU20'
  },
  port: 8080
};
