import React, { useEffect, useState } from "react";
import style from './TeamsPage.module.css'
import components from '../../styles/components/components.module.css'
import nflLogo from "../../assets/National_Football_League_logo.svg";
import TeamCard from "../../components/TeamCard/TeamCard";

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
    <section>
      {/* <img src="../../src/assets/National_Football_League_logo.svg" alt="NFL" /> */}
      <div className={`${style.heroSection}`}>
        <img src={nflLogo} alt="NFL Logo" />
        <h1>The NFL Teams API</h1>
        <h6>Browse NFL teams, stadiums, and conference data. A modern full-stack application powered by React, Express, and MongoDB.</h6>
      </div>
      <div className={`${style.teamCards} ${components.container}`}>
        {teams.map((team) => {
          // const sumChampionships = team.reduce((acc, curr) => acc + curr, 0)
          // console.log(sumChampionships)
          return (
            <TeamCard
              key={team._id}
              city={team.city}
              state={team.stadium.state}
              name={team.name}
              founded={team.founded}
              logo={team.logo}
              wordmark={team.wordmark}
              championships={team.championships.length}
              stadium={team.stadium.name}
              capacity={team.stadium.capacity.toLocaleString('en-US')}
              conference={team.conference.abbreviation}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TeamsPage;
