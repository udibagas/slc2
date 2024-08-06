const express = require("express");
const {
  home,
  ph,
  movies,
  addMovie,
  createMovie,
  deleteMovie,
  editMovie,
  updateMovie,
} = require("./controllers");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get("/", home);
app.get("/production-houses", ph);
app.get("/movies", movies);
app.get("/movies/add", addMovie);
app.post("/movies/add", createMovie);
app.get("/movies/edit/:id", editMovie);
app.post("/movies/edit/:id", updateMovie);
app.get("/movies/delete/:id", deleteMovie); // req.params.id

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
