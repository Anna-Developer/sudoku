import { useState } from "react";

const Main = (props) => {
  const setValue = (e) => {
    const action = {
      type: "SET-VALUE",
      value: e.target.dataset.value,
      idxArr: idxArr,
    };
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

export default Main;
