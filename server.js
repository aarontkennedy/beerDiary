// Dependencies
// =========================================================
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

// Sets up the Express App
// =========================================================
let app = express();
const PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ layoutsDir: "app/public/views/layouts", 
                                  defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', 'app/public/views');

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// express will handle the static files
app.use(express.static('app/public'));

// Get the routes
require('./app/controller/routing/htmlRoutes.js')(app);
//require('./app/controller/routing/apiRoutes.js')(app);
require('./app/controller/routing/oauthRoutes.js')(app);

// load the models + sequelize
let db = require("./models");
db.sequelize.sync({force:true}).then(function () {
  // start the server
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
