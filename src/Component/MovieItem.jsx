import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieItem extends Component {
  render() {
  let  { name, language, url, rating, type} = this.props;
    return (
      <>
      <div className="container-fluid  ">
      <div className="container   ">
      <div className="card" style={{width: '18rem' }}>
  <img src={url} className=" img-fluid " alt="..." />
  <div className="card-body">
    <h5 className="card-title">  {name}</h5>
    <div className='d-flex justify-content-around p '>
      <p className='mt-2'><i class="fa-solid fa-star"></i> {rating ? rating : '8.9' } / 10</p>
      <p className='mt-2'>{type}</p>
    </div>
    <p className="card-text"> Langauge:- {language}</p>
    
    <Link to="#" > <button className='btn'>Read More</button></Link>
  </div>
</div>
</div>
</div>
      </>
    );
  }
}

export default MovieItem;

