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
        pictures: {
            type: DataTypes.STRING,
            get: function() {
                return JSON.parse(this.getDataValue('pictures'));
            },
            set: function(val) {
                return this.setDataValue('pictures', JSON.stringify(val));
            },
        },
    });
    return Listing;
};
