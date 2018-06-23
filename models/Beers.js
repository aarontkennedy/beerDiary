module.exports = function (sequelize, DataTypes) {

    let Beers = sequelize.define("Beers", {
        name: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give names
        }, 
        brewer: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give names
        }
    });


    Beers.associate = function (models) {
        Beers.hasMany(models.Waypoint, {
            onDelete: "cascade"
        });
        Beers.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Beers;
};