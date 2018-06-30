module.exports = function (sequelize, DataTypes) {

    let BeerConsumed = sequelize.define("BeerConsumed", {
        rating: { type: DataTypes.INTEGER,
            defaultValue: 7 },
        opinion: { type: DataTypes.STRING,
            defaultValue: "" }
    });

    BeerConsumed.associate = function (models) {
        BeerConsumed.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        }); 
        BeerConsumed.belongsTo(models.Beers, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return BeerConsumed;
};