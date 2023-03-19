const notFound = (req, res) => {
  res.status(404).json("Router does not exist");
};
module.exports = notFound;
