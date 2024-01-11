const Manager = require('./manager');
const Rating = require('./rating');
const User = require('./user');


Manager.hasMany(Rating, {
    foreignKey: 'manager_id',
    onDelete: 'CASCADE'
});

Rating.belongsTo(Manager, {
    foreignKey: 'manager_id'
});

module.exports = { Rating, Manager, User};
