import React, { Component } from 'react';
import MovieItem from './MovieItem';
import { Link  } from 'react-router-dom';
import MovieDetails from './MovieDetails'
export class Movie extends Component {
    
   
    
    constructor(){
        super();
        console.log("hello i am constructor");
        this.state = {
        articles :[],
        currentPage : 1,
        selectMovie : null
        }
    

    }


    async componentDidMount() {
        // try {
        //   const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        //   const data = await response.json();
        //   console.log(data);
        //   this.setState({ articles: data, loading: false });
        // } catch (error) {
        //   console.error('Error fetching data:', error);
        // }
        this.fetchData();
    }

     async fetchData(){
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        console.log(data);
        this.setState({ articles: data, loading: false });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
     }


     handleMovieClick = (movie) => {
      this.setState({ selectedMovie: movie });
    };
  
  render() {
    const{selectedMovie} = this.state;
    if (selectedMovie) {
      return <MovieDetails {...selectedMovie}  />;
    }
    return (
  <>
  <div className="container my-3">

  <h1 className='heading text-center h1'>Welcome To All Movies </h1>
  <div className="row px-3">
  {this.state.articles.map((element)=>{
 return <div className="col-md-6 mt-4 my-3 " key={element.show.id}>
  <div onClick={() => this.handleMovieClick(element.show)}>
  <Link to={`/movies/${element.show.id}`} style={{textDecoration: 'none'}} >
    <MovieItem  name = {element.show.name} rating={element.show.rating.average} type= {element.show.type} language = {element.show.language} url = {element.show.image.original}/>
    
     
</Link>
  </div>
 </div>
  } )}
  </div>


  </div>
  </>
    );
  }
}

export default Movie;
