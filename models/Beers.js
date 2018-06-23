module.exports = function (sequelize, DataTypes) {

    let Beers = sequelize.define("Beers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        brewery: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        style: {
            type: DataTypes.STRING
        }, 
        abv: {
            type: DataTypes.FLOAT
        }, 
        ibu: {
            type: DataTypes.FLOAT
        },  
        description: {
            type: DataTypes.TEXT
        }
    });


    Beers.associate = function (models) {
        Beers.hasMany(models.BeerConsumed, {
            onDelete: "cascade"
        });
    };

    return Beers;
};