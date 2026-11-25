import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import MovieGrid from "../components/MovieGrid";
import { MOVIES_LIST_URL } from "../api/tmdb";
import type { ListMovie, ListMovieResponse } from "../types/movieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState<ListMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(MOVIES_LIST_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Errore ${res.status}`);
        return res.json() as Promise<ListMovieResponse>;
      })
      .then((data) => setMovies(data.results))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageTitle
        title="The Lord of the Rings"
        subtitle="Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20 items"
      />
      {loading && <p className="note">Caricamento dei film…</p>}
      {error && <p className="note">Impossibile caricare i film.</p>}
      {!loading && !error && <MovieGrid movies={movies} />}
    </>
  );
};

export default MoviesPage;
