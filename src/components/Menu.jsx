import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="default">
      <h1>Sudoku</h1>
      <NavLink to="/main" className="btn">
        Play
      </NavLink>
    </div>
  );
};

export default Menu;
