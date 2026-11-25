import { POSTER_BASE_URL } from "../api/tmdb";
import type { PosterProps } from "../types/props";

const Poster = ({ path, alt, variant }: PosterProps) => {
  const className = variant === "card" ? "card__poster" : "detail__poster";

  if (!path) {
    return <div className={className}>Poster</div>;
  }

  return (
    <div className={`${className} poster--image`}>
      <img src={`${POSTER_BASE_URL}${path}`} alt={alt} />
    </div>
  );
};

export default Poster;
