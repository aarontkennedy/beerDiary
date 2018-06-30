module.exports = function (sequelize, DataTypes) {

    let Beers = sequelize.define("Beers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        style: {
            type: DataTypes.STRING,
            defaultValue: "Beer"
        }, 
        abv: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        }, 
        ibu: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },  
        description: {
            type: DataTypes.TEXT,
            defaultValue: ""
        },
        brewery: {
            type: DataTypes.STRING,
            defaultValue: ""
        },  
        address: {
            type: DataTypes.STRING,
            defaultValue: ""
        },  
        city: {
            type: DataTypes.STRING,
            defaultValue: ""
        },  
        state: {
            type: DataTypes.STRING,
            defaultValue: ""
        },  
        country: {
            type: DataTypes.STRING,
            defaultValue: ""
        }, 
        zipCode: {
            type: DataTypes.STRING,
            defaultValue: ""
        },  
        phone: {
            type: DataTypes.STRING,
            defaultValue: ""
        },  
        website: {
            type: DataTypes.STRING,
            defaultValue: ""
        }
    });


    Beers.associate = function (models) {
        Beers.hasMany(models.BeerConsumed, {
            onDelete: "cascade"
        });
    };

    return Beers;
};