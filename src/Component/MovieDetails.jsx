import React from 'react';
import { Link } from 'react-router-dom';
const MovieDetails = ({ name, runtime, language,network,url,ended, image,type, id,status,genres,premiered, schedule }) => {
  return (
    <div>
        <div className="container mb-3">

      <h2 className='h2 text-center display-3  mt-3'>{name}</h2>
      <div className="row details mt-3">
        <div className="col-md-6 text-center">
        <img src={image.medium} alt={name} className='img-fluid w-75 h-75 ' />
        </div>
        <div className="col-md-6 ">
            
            <div className='d-flex justify-content-around even' >
      <p  className='even'>Runtime: {runtime} min</p>
      <p  className='even'>Language: {language}</p>
      </div>
      <div className='d-flex justify-content-around odd '  >
      <p className='odd'>ID: {id}</p>
     <p className='odd'>Status: {status}</p>
     </div>
     <div className='d-flex justify-content-around even' >
      <p  className='even'>Type: {type}</p>
      <p  className='even'>Genres: {genres}</p>
      </div>
      <div className='d-flex justify-content-around odd '  >
      <p className='odd'>Premiered: {premiered ? premiered: '2020-06-02'}</p>
     <p className='odd'>Days: {!schedule.days ? schedule.days : 'Sunday'}</p>
     </div>
     <div className='d-flex justify-content-around even' >
      <p  className='even'>Time: {schedule.time ? schedule.time : '11:00 PM'}</p>
      <p  className='even'>Code: FPT</p>
      </div>
      <div className='d-flex justify-content-around odd  '  >
      <p className='odd'>Country: US</p>
     <p className='odd'>Ended: {ended ? ended: '22-10-2020'}</p>
    
     </div>
     <div className='d-flex text-center odd card mt-3 '>
     <Link to={url} target='_blank' > <button className='btn '>OfficialSite</button></Link>
    
     </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default MovieDetails;