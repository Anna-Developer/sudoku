import { NavLink } from "react-router-dom";

const GameOver = () => {
  return (
    <div className="default gameOver">
      <h1>You lose!</h1>
      <div className="btns">
        <NavLink to="/menu" className="btn">
          Menu
        </NavLink>
        <NavLink to="/main" className="btn">
          Try again
        </NavLink>
      </div>
    </div>
  );
};
export default GameOver;
