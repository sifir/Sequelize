module.exports = (sequelize, dataTypes) => {
    let alias = "Peliculas"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        },
        genre_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'Generos',
                key: 'id'
            }
        }
    }
    let config = {
        tableName: "movies",
        timestamps: false
    }

    const Pelicula = sequelize.define(alias, cols, config)

    Pelicula.associate = (modelos) => {
        Pelicula.belongsTo(modelos.Generos, {
            as: "generos",
            foreignKey: "genre_id"
        })
    }

    return Pelicula
}