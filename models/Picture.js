module.exports = function(sequelize, DataTypes) {
    let Picture = sequelize.define('Picture', {
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
    Picture.associate = function(models) {
        Picture.hasOne(models.Listing);
    };
    return Picture;
};
