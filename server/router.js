const AuthenticationController = require('./controllers/authentication')
//const UserController           = require('./controllers/user')
//const ChatController           = require('./controllers/chat')
//const CommunicationController  = require('./controllers/communication')
//const StripeController         = require('./controllers/stripe')
const express                  = require('express')
const passportService          = require('./config/passport')
const passport                 = require('passport')

// Middleware to require login/auth
const requireAuth  = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })

// Content for roles
const REQUIRE_ADMIN   = 'Admin'
const REQUIRE_OWNER   = 'Owner'
const REQUIRE_CLIENT  = 'Client'
const REQUIRE_MEMBER  = 'Member'
const REQUIRE_STUDENT = 'Student'

module.exports = function (app) {
  // initialize route groups
  const apiRoutes  = express.Router()
  const authRoutes = express.Router()
  const userRoutes = express.Router()
  const chatRoutes = express.Router()
  const payRoutes  = express.Router()
  const communicationRoutes = express.Router()

/* **********************************************
* ************* AUTH ROUTES ********************
* *********************************************
**/

  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes)

  // registration code
  authRoutes.post('/register', AuthenticationController.register)

  // login route
  authRoutes.post('/login', requireLogin, AuthenticationController.login)

  // password reset request route (generate/send token)
  /*authRoutes.post('/forgot-password', AuthenticationController.forgotPassword)*/
  /*authRoutes.post('/reset-password/:token', AuthenticationController.verifyToken)*/

  /* **********************************************
    * *************** USER ROUTES *****************
    * *********************************************
  */

  // set user routes as a subgroup/middleware to apiRoutes
  /*apiRoutes.use('/user', userRoutes)*/

  // view user profile route
  /*userRoutes.get('user/:id', requireAuth, UserController.viewProfile)*/

  // test protected route
  /*apiRoutes.get('/protected', requireAuth, function (req, res) {
    res.send({ content: 'The protected test route is functional!' })
  })*/

  /* **********************************************
    * *************** CHAT ROUTES *****************
    * *********************************************
  */

  // set chat routes as a subgroup/middleware to apiRoutes
  /*apiRoutes.use('/chat', chatRoutes)*/

  // view message to and from authenticated user
  /*chatRoutes.get('/', requireAuth, chatController.getConversations)*/

  // retrive single conversation
  /*chatRoutes.get('/:conversationId', requireAuth, ChatController.getConversation)*/

  // send reply in conversation
  /*chatRoutes.post('/:conversationId', requireAuth, ChatController.sendReply)*/

  // start new conversation
  /*chatRoutes.post('/new/:recipient', requireAuth, ChatController.newConversation)*/

  /* **********************************************
    * ************* PAYMENT ROUTES ****************
    * *********************************************
  */

  /*apiRoutes.use('/pay', payRoutes)*/

  // webhook endpoint for Stripe
  /*payRoutes.post('/webhook-notify', StripeController.webhook)*/

  // create customer and subscription
  /*payRoutes.post('/customer'. requireAuth, StripeController.createSubscription)*/

  // update customer object and billing information
  /*payRoutes.put('/customer', requireAuth, StripeController.updateCustomerBillingInfo)*/

  // delete subscription from customer
  /*payRoutes.delete('/subscription', requireAuth, StripeController.deleteSubscription)*/

  // upgrade or downgrade subscription
  /*payRoutes.put('/subscription', requireAuth, StripeController.changeSubscription)*/

  // fetch customer information
  /*payRoutes.get('/customer', requireAuth, StripeController.getCustomer)*/

  /* **********************************************
    * ********** COMMUNICATION ROUTES *************
    * *********************************************
  */

  //apiRoutes.use('/communication', communicationRoutes)

  // send email from contact form
  //communicationRoutes.post('/contact', CommunicationController.sendContactForm)


  // set URL for API group routes
  app.use('/api', apiRoutes)
}
