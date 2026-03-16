import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import { Conference, Stadium, Team } from "../models/index.js";

import conferencesData from "../data/conferences.js";
import stadiumsData from "../data/stadiums.js";
import teamsData from "../data/teams.js";

dotenv.config();

const seedData = async () => {
  try {
    console.log("🌱 Starting database seed...");

    // 1️⃣ Connect to MongoDB
    await connectDB();

    // 2️⃣ Clear existing collections
    await Conference.deleteMany({});
    await Stadium.deleteMany({});
    await Team.deleteMany({});

    console.log("🧹 Existing data cleared");

    // 3️⃣ Insert Conferences
    const conferences = await Conference.insertMany(conferencesData);
    console.log("🏈 Conferences inserted");

    // 4️⃣ Insert Stadiums
    const stadiums = await Stadium.insertMany(stadiumsData);
    console.log("🏟 Stadiums inserted");

    // 5️⃣ Build Conference Map
    const conferenceMap = {};
    conferences.forEach((conf) => {
      conferenceMap[conf.abbreviation] = conf._id;
    });
    // Example:
    // conferenceMap = { AFC: ObjectId(...), NFC: ObjectId(...) }

    // 6️⃣ Build Stadium Map
    const stadiumMap = {};
    stadiums.forEach((stadium) => {
      stadiumMap[stadium.name] = stadium._id;
    });
    // Example:
    // stadiumMap["Lambeau Field"] → ObjectId(...)

    // 7️⃣ Convert Team References
    const teams = teamsData.map((team) => {
      const stadiumId = stadiumMap[team.stadium];

      if (!stadiumId) {
        console.error("❌ Stadium not found:", team.stadium);
      }

      return {
        ...team,
        conference: conferenceMap[team.conference],
        stadium: stadiumId,
      };
    });

    // 8️⃣ Insert Teams
    await Team.insertMany(teams);
    console.log("🏆 Teams inserted");

    console.log("✅ Database seeded successfully!");

    // 9️⃣ Close connection
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedData();
