const Main = () => {
  const tbodyData = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];
  const numbersData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tbody = tbodyData.map((tr, trIdx) => {
    return (
      <tr>
        {tr.map((td, tdIdx) => {
          return <td>{td}</td>;
        })}
      </tr>
    );
  });
  const numbers = numbersData.map((li, listItdx) => {
    return <li>{li}</li>;
  });
  const errors = 0;
  return (
    <div className="main">
      <h1 className="title">Sudoku</h1>
      <table className="gameArea">
        <tbody className="blocks">{tbody}</tbody>
      </table>
      <ul className="numbers">{numbers}</ul>
      <div className="errors">
        Errors: <span>{errors} / 3</span>
      </div>
    </div>
  );
};

export default Main;
