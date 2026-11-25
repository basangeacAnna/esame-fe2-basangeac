import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackLink from "../components/BackLink";
import MovieDetailInfo from "../components/MovieDetailInfo";
import { getMovieDetailUrl } from "../api/tmdb";
import type { MovieDetail } from "../types/movieDetail";

const MovieDetailPage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(false);

    fetch(getMovieDetailUrl(id))
      .then((res) => {
        if (!res.ok) throw new Error(`Errore ${res.status}`);
        return res.json() as Promise<MovieDetail>;
      })
      .then((data) => setMovie(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <BackLink to="/" label="← Torna all’elenco" />
      {loading && <p className="note">Caricamento del film…</p>}
      {error && <p className="note">Impossibile caricare il film.</p>}
      {!loading && !error && movie && <MovieDetailInfo movie={movie} />}
    </>
  );
};

export default MovieDetailPage;
