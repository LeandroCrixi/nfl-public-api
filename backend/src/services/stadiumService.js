import { Stadium } from "../models/index.js";

const getAllStadiums = async (filters) => {
  const { search, city, sort } = filters;
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

  // 📊 SORTING
  let sortOption = { name: 1 };

  if (sort === "name") {
    sortOption.name = 1; // A-Z
  } else if (sort === "-name") {
    sortOption.name = -1; // Z-A
  }

  const stadiums = await Stadium.find(query)
    .sort(sortOption);
  return stadiums;
};

export { getAllStadiums };
