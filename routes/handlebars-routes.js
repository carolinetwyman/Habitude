// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  //1. landing page and its css routing 
  app.get('/', (req, res)=> res.render('home',{style: 'homepage.css'}))

  //2. signup page and its styling routing. 
  //Allow the accessiblity to the members if user signup eles stay at the signup page
  app.get("/signup", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render('signup',{style: 'login-signup.css'})

  });

//3. login page and its styling route
  app.get("/login", (req, res) => {
    // if user login is successful take the route to the members page else remain in the login page
    if (req.user) {
      res.redirect("/members");
    }
    res.render('login',{style: 'login-signup.css'})
  });

  //4. members page and its css. need login authontication.
  app.get("/members", isAuthenticated, (req, res) => res.render('members', {style: 'members.css'}));

  //5.progress chart page and its styling. To get an access user must be loged in
  app.get("/progresschart", isAuthenticated, (req, res) => res.render('progresschart', {style: 'members.css'}));

  //6. community page and its css. To get an access user must be loged in
  app.get('/community', isAuthenticated, (req, res) => res.render('community',{style: 'community.css'}))

  
 };

