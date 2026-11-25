import GenreTag from "./GenreTag";
import type { GenreListProps } from "../types/props";

const GenreList = ({ genres }: GenreListProps) => {
  return (
    <div className="detail__genres">
      {genres.map((genre) => (
        <GenreTag key={genre.id} name={genre.name} />
      ))}
    </div>
  );
};

export default GenreList;
