const { Manager } = require('../models');


const managerData = [
  {
    name: "DarkKnightFan",
    email: "darkfan@example.com",
    password: "batman123",
    reviews: [1, 2],
  },
  {
    name: "EviLairEmployee",
    email: "evilair@example.com",
    password: "villain456",
    reviews: [3],
  },
  {
    name: "MarvelousFan",
    email: "marvelfan@example.com",
    password: "marvel123",
    reviews: [4, 5],
  },
  {
    name: "WonderWorker",
    email: "wonderworker@example.com",
    password: "amazon456",
    reviews: [6],
  },
  {
    name: "EldritchEnthusiast",
    email: "eldritch@example.com",
    password: "cthulhu789",
    reviews: [7],
  },
  {
    name: "PirateCoder",
    email: "piratecoder@example.com",
    password: "yarrrrrr",
    reviews: [8],
  },
];
const seedManager = () => Manager.bulkCreate(managerData);

module.exports = seedManager;
