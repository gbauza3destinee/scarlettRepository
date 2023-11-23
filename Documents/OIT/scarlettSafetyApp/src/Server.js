


// import Emergency from "./Emergency";

// // - Instead of placing information into databse, I will call log functions instead

// // This file is where we'll build our server.

// // ******* (1)Require modules/deps
// const express = require("express");
// const cors = require("cors"); // to send information over web
// const button = require(Button);

// // ****** (2)Initialize express and the port number to reach
// // an endpoint
// const app = express();
// app.use(cors());
// var router = express.Router();
// var PORT = 3000; // eventually this will be either port 80, 443 

// //******* (3) Use a middleware : bodyparser 
// express.use(bodyParser.json()); // body parser middleware to parse json data

// //      Middleware opt 2 : use ?
// express.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({
//     status: 500,
//     message: "Something went wrong",

//   });
// });

// //(6) App is listening to port
// app.listen(PORT, function (err) {
//   if (err) console.log(err);
//   console.log("Server listening on PORT:", PORT);
// });
