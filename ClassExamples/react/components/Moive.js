import './movie.css'

function Movie(props){


    return(<div className="movie-card">
                <img src={props.movie} width="300px"/>
               <center><b>{props.title}</b></center>

        </div>);
}

export default Movie;
