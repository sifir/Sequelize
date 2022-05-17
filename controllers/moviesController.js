const { log } = require('console');
let db = require('../database/models')
let sequelize = db.sequelize;

let moviesController = {
    list: (req,res) => {

        sequelize.query("SELECT * FROM movies")
        .then( (resultados) => {

            let peliculas = resultados[0]
            
            res.render("listadoDePeliculas", {peliculas: peliculas})

        })
    },

    drama: (req,res) => {
        db.Peliculas.findAll({
            where: {
                genre_id: 3
            }
        })
            .then( (peliculas) => {
                res.render("peliculasDrama", {peliculas: peliculas})
            })
    },

    top: (req,res) => {
        db.Peliculas.findAll({
            where: {
                //sequelize operators
                //db sequelize operadores greater than
                rating: { [db.Sequelize.Op.gt] : 8 }
            },
            order: [
                ["title", "ASC"]
            ], 
            limit: 5
        })
            .then( (peliculas) => {
                res.render("top", {peliculas: peliculas})
            })

    },

    totalTime: (req,res) => {
        //funciones de agregacion
        db.Peliculas.sum("length")
            .then((resultado) =>{
                console.log(resultado);
            })
    },

    detail: (req,res) => {

        db.Peliculas.findByPk(req.params.id)
            .then ((pelicula) => {
                res.render("detalle", {pelicula: pelicula})
            })
    },

    search: (req,res) => {
        
        let busquedaUsuario = req.body.search  

        db.Peliculas.findAll({
            where: {
                title: { [db.Sequelize.Op.like] : '%' + busquedaUsuario + '%' }
            }
        })
            .then( (peliculas) => {
                res.render("searchResult", {peliculas: peliculas})
            })
    },

    add: (req,res) => {
        res.render("crearPelicula")
    },

    create: (req,res) => {

        console.log(req.body);

        // db.Peliculas.create({
        //     title: req.body.title,
        //     rating: req.body.rating,
        //     awards: req.body.awards,
        //     release_date: req.body.release_date,
        //     length: req.body.length
        // })

        res.redirect("/movies")
    },

    test: (req,res) => {
        console.log(req.body);
        res.render("test")
    }
}

module.exports = moviesController