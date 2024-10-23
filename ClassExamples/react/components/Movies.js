import { Component } from "react";
import Movie from './Moive.js'
import './movies.css'
import movieslist from "./movieslist.js";

class Movies extends Component{

    state={...movieslist}

    getMovie =object=>{
        return <Movie movie={object.movie} title={object.title}/>
    }


    render(){
        return(
        <div>
             <h3>Recommended Movies</h3>
            
            <div className="movie-section">
             <div className='row'>
            {this.getMovie(this.state.Venom)}
            {this.getMovie(this.state.Devera)}
            {this.getMovie(this.state.Vettayain)}
            {this.getMovie(this.state.viswam)}
            
            </div> </div><br/>
            
            <h3>The Best of Live Events</h3> 
            <div className="movie-section">

             <div className='row'>
                {this.getMovie(this.state.TechRoast)}
                {this.getMovie(this.state.PeppaPig)}
                {this.getMovie(this.state.Taitans)}
                {this.getMovie(this.state.FilmCity)}
                
            </div></div> <br/>
            
            <h3>Your Music Studio</h3>  
            <div className="movie-section">
            <div className='row'>   
            {this.getMovie(this.state.Music)}
            {this.getMovie(this.state.Karthik)}
            {this.getMovie(this.state.Guru)}
            {this.getMovie(this.state.Live)}
               
            </div>
            </div>
            </div>


        

        );
    }
}

export default Movies;