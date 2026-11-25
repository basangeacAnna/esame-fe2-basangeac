import MovieCard from "./MovieCard";
import type { MovieGridProps } from "../types/props";

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
