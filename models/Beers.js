module.exports = function (sequelize, DataTypes) {

    let Beers = sequelize.define("Beers", {
        name: {
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
        },
        brewery: {
            type: DataTypes.STRING
        },  
        address: {
            type: DataTypes.STRING
        },  
        city: {
            type: DataTypes.STRING
        },  
        state: {
            type: DataTypes.STRING
        },  
        country: {
            type: DataTypes.STRING
        }, 
        zipCode: {
            type: DataTypes.STRING
        },  
        phone: {
            type: DataTypes.STRING
        },  
        website: {
            type: DataTypes.STRING
        }
    });


    Beers.associate = function (models) {
        Beers.hasMany(models.BeerConsumed, {
            onDelete: "cascade"
        });
    };

    return Beers;
};