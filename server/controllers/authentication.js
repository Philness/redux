const jwt      = require('jsonwebtoken')
const crypto   = require('crypto')
const User     = require('../models/user')
const config   = require('../config/main')
const gravatar = require('gravatar');

// create JSON web token
function generateToken (user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 // milliseconds
  })
}

// set user's info from request
function setUserInfo (request) {
  var url = gravatar.url(request.email, {s: '200', r: 'pg', d: '404'});

  var  getUserInfo = {
    _id          : request._id,
    firstName    : request.profile.firstName,
    lastName     : request.profile.lastName,
    email        : request.email,
    role         : request.role,
    username     : request.profile.username,
    organization : request.profile.organization,
    country      : request.profile.country,
    gravatar     : url
  };

  return getUserInfo
}

/*
************************ LOGIN ROUTE **************************
*/

exports.login = function (req, res, next) {

	var userInfo = setUserInfo(req.user)

  res.status(200).json({
    token : 'JWT ' + generateToken(userInfo),
    user  : userInfo
  })
}

/*
****************** REGISTRATION ROUTE ********************
*/

exports.register = function (req, res, next) {
  // check for registration errors
  const email     = req.body.email
  const firstName = req.body.firstName
  const lastName  = req.body.lastName
  const password  = req.body.password

  const confirmPass  = req.body.confirmPass
  const organization = req.body.organization
  const country      = req.body.country
  const username     = req.body.username

  var url = gravatar.url(email, {s: '200', r: 'pg', d: '404'});
  // return error if no email is provided
  if (!email) {
    return res.status(422).send({ error: 'You must provide a valid email address.' })
  }

  // return error if full name is not provided
  if (!firstName || !lastName) {
    return res.status(422).send({ error: 'You must enter a first and last name.' })
  }
  if (!country ) {
    return res.status(422).send({ error: 'You must choose a country' })
  }
  if (!organization ) {
    return res.status(422).send({ error: 'You must enter an organization' })
  }
  if (!username ) {
    return res.status(422).send({ error: 'You must enter an username' })
  }
  // return error if no password is provided
  if (!password) {
    return res.status(422).send({ error: 'You must enter a password' })
  }

  // form is saving to mongo datastore now
  //else if(password !== confirmPass){
    //return res.status(422).send({ error: 'Confirm Password and Password must match' })
  //}

  User.findOne({ email: email }, function (err, existingUser) {
    if (err) {
      return next(err)
    }

    // if user is not unique, return error
    if (existingUser) {
      return res.status(422).send({ error: 'That email address is already in use.' })
    }

    // if email is unique and password was provided, create account
    let user = new User({
      email    : email,
      username : username,
      password : password,
      profile  : {
        firstName    : firstName,
        lastName     : lastName,
        organization : organization,
        country      : country,
        gravatar     : url
      }
    })

    user.save(function (err, user) {
      if (err) {
        return next(err)
      }
      let userInfo = setUserInfo(user)

      res.status(201).json({
        token: 'JWT ' + generateToken(userInfo),
        user : userInfo
      })
    })
  })
}

/*
****************** AUTHORIZATION MIDDELWARE ********************
*/
// Role authorization check
exports.roleAuthorization = function (role) {
  return function (req, res, next) {
    const user = req.user

    User.findById(user._id, function (err, foundUser) {
      if (err) {
        res.status(422).json({ error: 'No user was found.' })
        return next(err)
      }

      // if user is found, check role
      if (foundUser.role === role) {
        return next()
      }

      res.status(401).json({ error: 'You are not authorized to view this content.' })
      return next('Unauthorized')
    })
  }
}

