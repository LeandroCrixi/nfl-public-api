import style from "./TeamCard.module.css";

const TeamCard = ({
  id,
  city,
  state,
  name,
  founded,
  logo,
  wordmark,
  championships,
  last,
  stadium,
  capacity,
  conference,
}) => {
  return (
    <div key={id} className={`${style.teamCard}`}>
      <div className={style.teamCardTop}>
        <p className={`${style.conference} ${conference === "NFC" ? style.nfc : style.afc}`}>{conference}</p>
        <img
          className={`${style.logo}`}
          src={`http://localhost:3000${logo}`}
          alt={`${name} logo`}
        />
        <img
          className={`${style.wordmark}`}
          src={`http://localhost:3000${wordmark}`}
          alt={`${name} wordmark`}
        />
      </div>
      <div className={style.teamCardBotton}>
        <h2>
          {city} {name}
        </h2>
        <span>
          {city}, {state}
        </span>
        <span>Est. {founded}</span>
        <div className={style.highlightBorder}>
          <p>Championships: {championships}</p>
          <span>Last Championship: {last}</span>
        </div>
        <p>{stadium}</p>
        <span>{capacity} capacity</span>
      </div>
    </div>
  );
};

export default TeamCard;
