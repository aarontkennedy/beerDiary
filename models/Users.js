module.exports = function (sequelize, DataTypes) {

    let Users = sequelize.define("Users", {
        googleID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give names
        },
        displayName: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give names
        },
        photoIcon: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give photos
        },
        country: {
            type: DataTypes.STRING
            //allowNull: false - google sometimes doesn't give photos
        }
    });


    Users.associate = function (models) {
        Users.hasMany(models.BeerConsumed, {
            onDelete: "cascade"
        });
    };

    return Users;
};