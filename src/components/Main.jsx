const Main = (props) => {
  const tbody = props.state.matrix.map((tr, trIdx) => {
    return (
      <tr key={trIdx}>
        {tr.map((td, tdIdx) => {
          return <td key={`${trIdx}_${tdIdx}`}>{td || ""}</td>;
        })}
      </tr>
    );
  });
  const numbers = props.state.numbersData.map((li) => {
    return <li key={li}>{li}</li>;
  });

  return (
    <div className="main">
      <h1 className="title">Sudoku</h1>
      <table className="gameArea">
        <tbody className="blocks">{tbody}</tbody>
      </table>
      <ul className="numbers">{numbers}</ul>
      <div className="errors">
        Errors: <span>{props.state.errors} / 3</span>
      </div>
    </div>
  );
};

export default Main;
