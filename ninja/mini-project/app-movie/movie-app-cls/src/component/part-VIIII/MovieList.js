import MovieCard from "./MovieCard";

function MovieList(props){
        const {totalMovies,addStars} = props;
        return(
            <div className="main">{totalMovies.map((result,index) => (
                <MovieCard getMovies= {result} 
                  addStars ={addStars}/>
                  ))}              
            </div>
        )
    }

export default MovieList;