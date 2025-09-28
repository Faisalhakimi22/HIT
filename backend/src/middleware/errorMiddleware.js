// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({ message: err.message || 'Server Error' });
}; 