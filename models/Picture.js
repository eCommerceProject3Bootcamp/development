module.exports = function(sequelize, DataTypes) {
    let Pictures = sequelize.define('Pictures', {
        pictures: {
            type: DataTypes.TEXT('long'),
            get: function() {
                return JSON.parse(this.getDataValue('pictures'));
            },
            set: function(value) {
                this.setDataValue('pictures', JSON.stringify(value));
            },
        },
    });
    Pictures.associate = function(models) {
        Pictures.hasOne(models.Listing, { foreignKey: 'ListingId' });
    };
    return Pictures;
};
