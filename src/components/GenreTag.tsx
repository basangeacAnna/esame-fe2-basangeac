import type { GenreTagProps } from "../types/props";

const GenreTag = ({ name }: GenreTagProps) => {
  return <span className="genre">{name}</span>;
};

export default GenreTag;
