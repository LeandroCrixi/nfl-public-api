import React, { useEffect, useState } from "react";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/teams");
        const json = await res.json();
        setTeams(json);
      } catch (error) {
        console.error("Fetch failed", error);
      } finally {
        setIsLoading(false); // Stop loading regardless of success/error
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>NFL Teams</h1>
      {teams.map((team) => {
        return (
          <div key={team._id}>
            <p>{team.city} {team.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamsPage;
