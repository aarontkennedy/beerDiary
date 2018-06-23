module.exports = function (sequelize, DataTypes) {

    let Beers = sequelize.define("Beers", {
        name: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give names
        }, 
        brewery: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give names
        },  
        category: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give names
        }, 
        style: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give names
        }, 
        abv: {
            type: DataTypes.FLOAT
            //allowNull: false - google sometimes doesn't give names
        }, 
        ibu: {
            type: DataTypes.FLOAT
            //allowNull: false - google sometimes doesn't give names
        },  
        style: {
            type: DataTypes.TEXT
            //allowNull: false - google sometimes doesn't give names
        }
    });


    Beers.associate = function (models) {
        Beers.hasMany(models.BeerConsumed, {
            onDelete: "cascade"
        });
    };

    return Beers;
};