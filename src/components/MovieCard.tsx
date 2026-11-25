import { Link } from "react-router-dom";
import Poster from "./Poster";
import type { MovieCardProps } from "../types/props";
import { formatDate, formatVote } from "../utils/format";

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <article className="card">
      <Poster path={movie.poster_path} alt={movie.title} variant="card" />
      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta">
          Uscita: {formatDate(movie.release_date)} · Voto: {formatVote(movie.vote_average)}
        </p>
        <p className="card__overview">{movie.overview}</p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  );
};

export default MovieCard;
