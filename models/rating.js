const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model { }

Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                max: 5,
                isNumeric: true,
            }
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'manager',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rating',
    }
);

module.exports = Rating;
