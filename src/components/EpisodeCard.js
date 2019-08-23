import React from "react";

export default function EpisodeCard(props) {
  const { name, iardate, episode } = props;

  return (
    <div>
      <div>
        <div>{name}</div>
        <div>
          {episode} {iardate}
        </div>
      </div>
    </div>
  );
}
