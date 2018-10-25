module.exports = function(sequelize, DataTypes) {
	let Item = sequelize.define('item', {
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
	});
	return Item;
};
