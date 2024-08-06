const Movie = require("../models/Movie");
const ProductionHouse = require("../models/ProductionHouse");

class Controller {
  static home(req, res) {
    res.render("home");
  }

  static async ph(req, res) {
    try {
      const ph = await ProductionHouse.findAll();
      res.render("ph", { ph });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async movies(req, res) {
    try {
      const movies = await Movie.findAll();
      res.render("movies", { movies });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async addMovie(req, res) {
    try {
      const ph = await ProductionHouse.findAll();
      res.render("addMovie", { genres: Movie.genres, ph });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async createMovie(req, res) {
    const { name, released_year, genre, ProductionHouseId } = req.body;
    try {
      await Movie.create({ name, released_year, genre, ProductionHouseId });
      res.redirect("/movies");
    } catch (error) {
      console.log(error);
      res.send(error.errors);
    }
  }

  static async deleteMovie(req, res) {
    try {
      await Movie.remove(Number(req.params.id));
      res.redirect("/movies");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async editMovie(req, res) {
    try {
      const movie = await Movie.findById(Number(req.params.id));
      const ph = await ProductionHouse.findAll();
      res.render("editMovie", { genres: Movie.genres, ph, movie });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }

  static async updateMovie(req, res) {
    const { name, released_year, genre, ProductionHouseId } = req.body;

    try {
      await Movie.update(req.params.id, {
        name,
        released_year,
        genre,
        ProductionHouseId,
      });
      res.redirect("/movies");
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
}

module.exports = Controller;
