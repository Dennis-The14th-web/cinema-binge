import React, { useState } from 'react';


function Result ({ result, openModal }) {

    return (
      <div className="result" 
      onClick={() => openModal(result.imdbID)}>
        <img src={result.Poster} alt="poster" />
        <h3>{result.Title}</h3>
        <h7><small><b>Click poster for more info</b></small></h7>
     </div>
    )
}


export default Result