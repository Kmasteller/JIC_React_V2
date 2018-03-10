var mongoose = require("mongoose");

var User = require('../mongooseModels/user.js')
//bringing in the bcrypt npm module
var bcrypt = require('bcrypt');
module.exports = function (app) {
  console.log("😀  Hit /apiRoutes");
  //grabbing our sequelize models
  // console.log(db, "this is db")

  //login endpoint
  app.post("/api/login", function (req, res) {
    //will show our user data from front end
    console.log("Req.body!" , req.body)
    //will see the currently formatted session object with user data
    console.log("Session!!" , req.session)
    //initalizing user data variable to an empty object. this will hold our user data on this endpoint
    var user = {};
    console.log("Req.body.email", req.body.email);
    //using our users model to query our MySQL database for user info where ther username equals the username we passed in from the front end
    User.findOne({
      email: req.body.email
    })
      .then(function (UserData) {
        console.log("User info: " , UserData, "this is user data");
        //if the database does not find a user with that username we will revice a null value from our database. null values are a little "special" in relation to JS.
        //this is how we would correctly do a check for a null value if recieved
        if (!UserData && typeof UserData === "object") {
          //this will send an error code to our front end for the user not existing
          res.status(404).send('ohhh no, there is a problem with the email or password!')
        } else {
          //here we bring in bcrypt. bcrypt's compair method asks for a few things. it asks for the first parameter you send in a plain text password. 
          //AKA: our users password coming in from the front end. the second parameter bcrypt wants us to pass in the hashed password that we stored in the User. lastly it wants a callback funtion
          //bcrypt will hash the pasword coming in from the front end and compaire it to the users hashed password from our database it will give us a boolean value to let us know if the 
          //passwords were the same
          bcrypt.compare(req.body.password, UserData.password, function (err, bcryptRes) {
            // bcryptRes == true or false

            //if the response is false send an error to the front end letting the user know that the passwords did not match.
            if (!bcryptRes) {
              res.status(404).send('ohhh no, there is a problem with the email or password!')
            } else {
              //if the response from bcrypt was true we know our users password matched and we can now format the user data coming from the database to be sent to the font end
              var userObj = {
                id: UserData.id,
                first_name: UserData.first_name,
                last_name: UserData.last_name,
                email: UserData.email
              }
              //we update the loggedIn key to have a true value. we can use this value on the fron end to see if the user is logged in or not.
              req.session.user.loggedIn = true;
              req.session.user.isAdmin = UserData.isAdmin;
              //here the session's user object is updated with the users data. we can hit our /session endpoing witha  get request from the front end and get our user object.
              req.session.user.currentUser = userObj;

              console.log("this is session", req.session)
              res.status(200).send('Successful login')
            }
          })
        }
      }).catch(function (err) {
        console.log(err, " this is error");
        res.status(404).send('ohhh no, there is a user with the same email')
      })
  })

  app.post("/api/signUp", function (req, res, next) {
    console.log(req.body, "req.body on apiRoutes")
    //to store a hased password into the database we need to first salt our password. this will tell bcrypt how many time to pass through the users password to generate the hash
    bcrypt.genSalt(10, function (err, salt) {
      console.log(req.body, "pass bcrypt.gensalt?")
      //the bcrypt hash method will then 
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        console.log(req.body, "pass bcrypt.hash?")
        // Store hash in your password User.
        req.body.password = hash;
        console.log("password");
        User.create(req.body).then(function (UserData) {
          console.log("api signup" + UserData)
          var userObj = {
            id: UserData._id,
            first_name: UserData.first_name,
            last_name: UserData.last_name,
            email: UserData.email
          }
          req.session.user.loggedIn = true;
          req.session.user.currentUser = userObj;
          res.json(UserData);
        }).catch(function (err) {

          res.status(404).send('ohhh no, there is a user with the same email')
        })
      });
    });
  });

  // signin endpoint logic
  // app.post("/api/signUp", function (req, res, next) {
  //   console.log(req.body)
  //   //to store a hased password into the database we need to first salt our password. this will tell bcrypt how many time to pass through the users password to generate the hash
  //   bcrypt.genSalt(10, function (err, salt) {
  //     //the bcrypt hash method will then 
  //     bcrypt.hash(req.body.password, salt, function (err, hash) {
  //       // Store hash in your password User.
  //       req.body.password = hash;
  //       User.create(req.body).then(function (UserData) {
  //         console.log(UserData)
  //         var userObj = {
  //           id: UserData._id,
  //           name: UserData.name,
  //           username: UserData.username,
  //           email: UserData.email,
  //           profilePic: UserData.profilePic
  //         }
  //         req.session.user.loggedIn = true;
  //         req.session.user.currentUser = userObj;
  //         res.json(UserData);
  //       }).catch(function (err) {

  //         res.status(404).send('ohhh no, there is a user with the username')
  //       })
  //     });
  //   });
  // });

  app.get("/api/logout", function (req, res, next) {
    req.session.user =  {
      loggedIn: false,
      isAdmin: false,
      currentUser: {
        id: null,
        first_name: '',
        last_name: '',
        email: ''
      }
    }
    res.json(req.session.user)
  });

  //endpoint for grabbing session user object to be used accrossed entire app.
  app.get("/api/session", function (req, res, next) {
    res.json(req.session.user)
  });

  //get user info endpoint via query params
  app.get('/api/profile/:email', function (req, res, next) {
    console.log(req.param);
    User.findOne({
      email: req.params.email
    }).then(function (UserData) {
      console.log(UserData)
      var userObj = {
        id: UserData.id,
        first_name: UserData.first_name,
        last_name: UserData.last_name,
        email: UserData.email
      }
      req.session.user.loggedIn = true;
      req.session.user.currentUser = userObj;
      res.json(userObj)
    })
  });


//   //update profile route
//   app.put('/api/update/:username', function (req, res, next) {
//     req.session.user.currentUser = req.body
//     var loggedUser = req.session.user.currentUser;
//     if (true) {
//       User.update({
//         username: loggedUser.username,
//         name: loggedUser.name,
//         email: loggedUser.email,
//         profilePic: loggedUser.profilePic
//       }, {
//           where: {
//             username: req.params.username
//           }
//         }).then(function (UserData) {
//           res.json(UserData)
//         })
//     } else {
//       res.status(404).json("please log in to update profile")
//     }
//   });
// }

  //update profile route
  app.put('/api/update/:email', function (req, res, next) {
    req.session.user.currentUser = req.body
    var loggedUser = req.session.user.currentUser;
    if (true) {
      User.update({
        email: loggedUser.email,
        first_name: loggedUser.first_name,
        last_name: loggedUser.last_name,
        email: loggedUser.email,
        photo: UserData.photo,
        birthdate: UserData.birthdate,
        address: UserData.address,
        phone: UserData.phone,
        height: UserData.height,
        weight: UserData.weight,
        hair: UserData.hair,
        eyes: UserData.eyes
      }, {
          where: {
            email: req.params.email
          }
        }).then(function (UserData) {
          res.json(UserData)
        })
    } else {
      res.status(404).json("please log in to update profile")
    }
  });
}