import { Link } from "react-router-dom";
import type { BackLinkProps } from "../types/props";

const BackLink = ({ to, label }: BackLinkProps) => {
  return (
    <Link className="back-link" to={to}>
      {label}
    </Link>
  );
};

export default BackLink;
