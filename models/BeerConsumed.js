module.exports = function (sequelize, DataTypes) {

    let BeerConsumed = sequelize.define("BeerConsumed", {
        // these may need to be temporarily null?
        // i don't always have both pieces of info at the same time
        address: { type: DataTypes.STRING },
        latitude: { type: DataTypes.FLOAT() },
        longitude: { type: DataTypes.FLOAT() }
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