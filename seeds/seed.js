const sequelize = require('../config/connection');
const { User, Rating, Manager } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  for (const review of reviewData) {
    await Rating.create({
      ...review,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();