import type { ListMovie } from "./movieList";
import type { Genre, MovieDetail } from "./movieDetail";

export type HeaderProps = {
  brand: string;
  navLabel: string;
};

export type PageTitleProps = {
  title: string;
  subtitle: string;
};

export type PosterProps = {
  path: string | null;
  alt: string;
  variant: "card" | "detail";
};

export type MovieGridProps = {
  movies: ListMovie[];
};

export type MovieCardProps = {
  movie: ListMovie;
};

export type BackLinkProps = {
  to: string;
  label: string;
};

export type MovieDetailInfoProps = {
  movie: MovieDetail;
};

export type GenreListProps = {
  genres: Genre[];
};

export type GenreTagProps = {
  name: string;
};