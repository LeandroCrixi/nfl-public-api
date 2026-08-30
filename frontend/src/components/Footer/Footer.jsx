import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";

const Footer = () => {
  const [teams, setTeams] = useState([]);
  const [stadium, setStadium] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/teams`);
        // const res = await fetch("http://localhost:3000/api/v1/teams");
        const json = await res.json();
        setTeams(json);
      } catch (error) {
        console.error("Fetch failed", error);
      } finally {
        setIsLoading(false); // Stop loading regardless of success/error
      }
    };
    fetchData();

    const fetchStadium = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/stadiums`);
        // const res = await fetch("http://localhost:3000/api/v1/stadiums");
        const json = await res.json();
        setStadium(json);
      } catch (error) {
        console.error("Fetch failed", error);
      } finally {
        setIsLoading(false); // Stop loading regardless of success/error
      }
    };
    fetchStadium();
  }, []);
  if (isLoading) return <p>Loading...</p>;

  const totalTeams = teams.length;
  const totalChampionships = teams.reduce((sum, team) => sum + (team.championships?.length || 0), 0);
  const totalStadiums = stadium.length;

  return (
    <footer>
      <ul>
        <li>Teams: {totalTeams}</li>
        <li>Championships: {totalChampionships}</li>
        <li>Stadiums: {totalStadiums}</li>
      </ul>
      <div>
        <p>Server Status: OK</p>
        <p className={style.netlify}>
          Frontend Deployed by
          <img src="../../../public/Netlify_logo.svg" alt="" />
        </p>
        <p>
          Built with <span>React</span> + <span>Node.js</span> + <span>MongoDB</span>
        </p>
      </div>
      <ul className={style.social}>
        <li>
          <a href="https://github.com/LeandroCrixi" target="blank">
            <img src="../../../public/github-original.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/leandrocrixi/" target="blank">
            <img src="../../../public/linkedin-plain.svg" alt="" />
          </a>
        </li>
      </ul>
      <p className={style.author}>
        By{" "}
        <a href="https://leo-crixi.com/" target="blank">
          Leo Crixi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
