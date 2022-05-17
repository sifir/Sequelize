module.exports = (sequelize, dataTypes) => {
    let alias = "Peliculas"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        length: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "movies",
        timestamps: false
    }

    const Pelicula = sequelize.define(alias, cols, config)

    return Pelicula
}