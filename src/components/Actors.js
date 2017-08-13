import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsData = actors.map(actor => {
    return (
    <div>
      {actor.name}
      {actor.movies.map((movie) => (<ul> {movie} </ul>))}
    </div>
    )
    })

  return (
    <div>
      <h1> Actors Page </h1>
      {actorsData}
    </div>
  );
};

export default Actors;
