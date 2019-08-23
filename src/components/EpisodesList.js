import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = () => {
      Axios.get("https://rickandmortyapi.com/api/episode/")

        .then(response => {
          console.log("The response data: ", response.data.results);

          setEpisodes(response.data.results);
        })

        .catch(error => {
          console.log("Can't get episodes data");
        });
    };
    getEpisodes();
  }, []);

  return (
    <section>
      {episodes.map((episode, key) => (
        <EpisodeCard
          key={key}
          name={episode.name}
          iardate={episode.air_date}
          episode={episode.episode}
        />
      ))}
    </section>
  );
}
