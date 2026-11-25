import Poster from "./Poster";
import GenreList from "./GenreList";
import type { MovieDetailInfoProps } from "../types/props";
import {
  formatCount,
  formatDate,
  formatLanguage,
  formatStatus,
  formatVote,
} from "../utils/format";

const MovieDetailInfo = ({ movie }: MovieDetailInfoProps) => {
  const metaItems = [
    `Uscita: ${formatDate(movie.release_date)}`,
    `Durata: ${movie.runtime} min`,
    `Voto: ${formatVote(movie.vote_average)}`,
    `Voti: ${formatCount(movie.vote_count)}`,
    `Stato: ${formatStatus(movie.status)}`,
    `Lingua: ${formatLanguage(movie.original_language)}`,
  ];

  const companies = movie.production_companies
    .map((company) => company.name)
    .join(" · ");

  return (
    <article className="detail">
      <div>
        <Poster path={movie.poster_path} alt={movie.title} variant="detail" />
      </div>

      <div>
        <h1 className="detail__title">{movie.title}</h1>
        {movie.tagline && <p className="detail__tagline">“{movie.tagline}”</p>}

        <ul className="detail__meta">
          {metaItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <GenreList genres={movie.genres} />

        <p className="detail__overview-label">Trama</p>
        <p className="detail__overview">{movie.overview}</p>

        {companies && <p className="card__meta">Produzione: {companies}</p>}
      </div>
    </article>
  );
};

export default MovieDetailInfo;
