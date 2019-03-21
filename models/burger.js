module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        burger_image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Burger;
}


