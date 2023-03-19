const mongooes = require("mongoose");

const connect = (url) => {
  return mongooes.connect(url);
};
module.exports = connect;
