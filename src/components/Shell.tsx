import { Outlet } from "react-router-dom";
import Header from "./Header";

const Shell = () => {
  return (
    <div className="shell">
      <Header brand="Movie App" navLabel="Home / Elenco" />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Shell;