require('dotenv').config()
const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require("cors");
// const hash = require('pbkdf2-password')()
// const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000; //Line 3
const bannersRouter = require("./routes/banners");
const concertsRouter = require("./routes/concerts");
const programsRouter = require("./routes/programs");
const albumsRouter = require("./routes/albums");
const songsRouter = require("./routes/songs");
const userRouter = require("./routes/users");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/banners", bannersRouter);
app.use("/concerts", concertsRouter);
app.use("/programs", programsRouter);
app.use("/albums", albumsRouter);
app.use("/songs", songsRouter);
app.use("/user", userRouter);
// app.use(session({
//   resave: false, // don't save session if unmodified
//   saveUninitialized: false, // don't create session until something stored
//   secret: 'shhhh, very secret'
// }));
// hash({ password: 'foobar' }, function (err, pass, salt, hash) {
//   if (err) throw err;
//   // store the salt & hash in the "db"
//   users.tj.salt = salt;
//   users.tj.hash = hash;
// });

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
