module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        accessToken: {
            type: DataTypes.STRING,
        },
        idToken: {
            type: DataTypes.STRING,
        },
        tokenExpiresAt: {
            type: DataTypes.STRING,
        },
    });
    return User;
};
