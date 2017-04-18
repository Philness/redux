module.exports = {
  // secret key for JWT signing and encryption
  'secret': 'super secret password!',
  // database connection
  'database': 'mongodb://localhost:27017/acm',
  // set port for server
  'port': process.env.PORT || 3000
}

