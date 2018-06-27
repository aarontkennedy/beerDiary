module.exports = function (sequelize, DataTypes) {

    let BeerConsumed = sequelize.define("BeerConsumed", {
        rating: { type: DataTypes.INTEGER },
        opinion: { type: DataTypes.STRING }
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