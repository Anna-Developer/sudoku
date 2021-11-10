import { NavLink } from "react-router-dom";

const Win = () => {
  return (
    <div className="default win">
      <h1>You win!</h1>
      <div className="btns">
        <NavLink to="/menu" className="btn">
          Menu
        </NavLink>
        <NavLink to="/main" className="btn">
          Play again
        </NavLink>
      </div>
    </div>
  );
};
export default Win;
