import { Team, Conference } from "../models/index.js";

const getAllTeams = async (filters) => {
  const { search, city, division, sort, conference } = filters;
  const query = {};

  if (search) {
    // Find documents where:
    // condition1 OR condition2 is true
    // Match ANY of these conditions
    query.$or = [
      // $regex
      // Find name that CONTAINS the word (case insensitive)
      // Search inside a string (like "includes")

      // $options
      // Case insensitive (PACK = pack = Pack)

      { name: { $regex: search, $options: "i" } },
      { city: { $regex: search, $options: "i" } },
    ];
  }

  // 📍 FILTER BY CITY
  if (city) {
    query.city = city;
  }

  // 📍 FILTER BY DIVISION
  if (division) {
    query.division = division;
  }

  // 📊 SORTING
  let sortOption = { name: 1 };

  if (sort === "name") {
    sortOption.name = 1; // A-Z
  } else if (sort === "-name") {
    sortOption.name = -1; // Z-A
  } else if (sort === "founded") {
    sortOption.founded = 1; // oldest first
  } else if (sort === "-founded") {
    sortOption.founded = -1; // newest first
  }

  if (conference) {
    const foundConference = await Conference.findOne({
      abbreviation: conference,
    });

    if (!foundConference) {
      return []; // no results
    }

    query.conference = foundConference._id;
  }

  const teams = await Team.find(query)
    .populate("stadium", "name city state opened capacity")
    .populate("conference", "name abbreviation")
    .sort(sortOption);
  return teams;
};

const getTeamById = async (id) => {
  const team = await Team.findById(id);
  return team;
};

export { getAllTeams, getTeamById };
