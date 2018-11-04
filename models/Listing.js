module.exports = function(sequelize, DataTypes) {
    let Listing = sequelize.define('Listing', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: 'Electronics',
        },
        qty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    });
    Listing.associate = function(models) {
        Listing.belongsTo(models.Picture);
    };
    return Listing;
};
