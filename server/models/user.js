const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const bcrypt   = require('bcrypt-nodejs')

// ************************ User Schema *************************//

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

// do I need a confirmPass here?

  profile: {
    firstName: { type: String },
    lastName : { type: String }
  },

  role: {
    type: String,
    enum: ['Member', 'Client', 'Student', 'Admin'],
    default: 'Member'
  },

  resetPasswordToken: { type: String },
  resetPasswordExpires: { Type: Date }
},
{
  timestamp: true
})


//const UserSchema = new Schema({
  //email: {
    //type      : String,
    //lowercase : true,
    //unique    : true,
    //required  : true
  //},

  //username: { type: String },
  //password: {
    //type     : String,
    //required : true
  //},

  //profile: {
    //firstName    : { type : String },
    //lastName     : { type : String },
    //bio          : { type : String },
    //gravatar     : { type : String },
    //phoneNumber  : { type : String },
    //country      : { type : String },
    //organization : { type : String },
  //},

  //subscriptions:{
    //type: String,
    //enum: ['MOOC', 'ACM4C']
  //},

  //role: {
    //type    : String,
    //enum    : ['Student','Professor','Admin','User'],
    //default : 'User'
  //},
    //classrooms:[{
      //type : Schema.ObjectId,
      //ref  : 'Classroom'
    //}],
    //Submissions:[{
      //type : Schema.ObjectId,
      //ref  : 'Submission'
    //}],
    //evaluations:[{
      //type : Schema.ObjectId,
      //ref  : 'Evaluation'
    //}]
  //},{
  //timestamps: true
//})

/******************** PRESAVE USER TO DATABASE,HASH PASSWORD IF PASSWORD IS MODIFIED OR NEW *******************/

  UserSchema.pre('save', function (next) {
    const user = this
    const SALT_FACTOR = 5
    if (!user.isModified('password')) {
      return next()
    }

    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
      if (err) {
        return next(err)
      }

      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err)
        }

        user.password = hash
        next()
      })
    })
  })

  /*************************** METHOD TO COMPARE PASSWORD FOR LOGIN *********************************/

  UserSchema.methods.comparePassword = function (canidatePassword, cb) {
    bcrypt.compare(canidatePassword, this.password, function (err, isMatch) {
      if (err) {
        return cb(err)
      }

      cb(null, isMatch)
    })
  }

  module.exports = mongoose.model('User', UserSchema)

