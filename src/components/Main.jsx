import { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import {
  setValueActionCreator,
  startGameActionCreator,
} from "../store/reducer";

const Main = (props) => {
  const isWin = () => {
    for (let elem of props.matrix) {
      if (elem.includes(0)) {
        return;
      }
    }
    props.dispatch(startGameActionCreator());
    props.history.push("/win");
  };
  const isGameOver = () => {
    if (props.errors < 3) {
      return;
    }
    props.dispatch(startGameActionCreator());
    props.history.push("/gameOver");
  };
  useEffect(() => {
    isWin();
    isGameOver();
    window.onpopstate = () => props.dispatch(startGameActionCreator());
  }, [props.matrix, props.errors]);
  const setValue = (e) => {
    const action = setValueActionCreator(e.target.dataset.value, idxArr);
    props.dispatch(action);
  };
  const [idxArr, newIdxArr] = useState([0, 0]);
  const setActiveInput = (a, b) => {
    newIdxArr([a, b]);
    // console.log(idxArr);
  };
  const tbody = props.matrix.map((tr, trIdx) => {
    return (
      <tr key={trIdx}>
        {tr.map((td, tdIdx) => {
          return (
            <td
              onClick={() => setActiveInput(trIdx, tdIdx)}
              key={`${trIdx}_${tdIdx}`}
              className={
                trIdx === idxArr[0] && tdIdx === idxArr[1]
                  ? "gameAreaTd activeInput"
                  : "gameAreaTd"
              }
            >
              {td || ""}
            </td>
          );
        })}
      </tr>
    );
  });
  const numbers = props.values.map((li) => {
    return (
      <li key={li} data-value={li} onClick={setValue}>
        {li}
      </li>
    );
  });

  return (
    <div className="main">
      <h1 className="title">Sudoku</h1>
      <table className="gameArea">
        <tbody className="blocks">{tbody}</tbody>
      </table>
      <ul className="numbers">{numbers}</ul>
      <div className="errors">
        Errors: <span>{props.errors} / 3</span>
      </div>
    </div>
  );
};

export default withRouter(Main);
