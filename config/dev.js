/* eslint-disable no-undef */
require("dotenv").config();
module.exports = {
  database: {
    URL: "mongodb://127.0.0.1:27017/treblle-hackathon-dev",
  },

  session: {
    secret: "ji291812m92hwe2QAA2@ew!jewufiw0+302-jfjD$!@1d",
  },

  redis: {
    URL: "127.0.0.1:6379",
  },

  treblle: {
    apiKey: process.env.TREBLLE_API_KEY,
    projectId: process.env.TREBLLE_PROJECT_ID
  }
};