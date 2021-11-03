import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Sudoku</h1>
        <div className="gameArea">
          <div className="blocks">
            <div>1</div>
            <div>2</div>
            <div>3</div>

            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="blocks">
            <div>4</div>
            <div>5</div>
            <div>6</div>

            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <div className="blocks">
            <div>1</div>
            <div>2</div>
            <div>3</div>

            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="blocks">
            <div>4</div>
            <div>5</div>
            <div>6</div>

            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <div className="blocks">
            <div>1</div>
            <div>2</div>
            <div>3</div>

            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="blocks">
            <div>4</div>
            <div>5</div>
            <div>6</div>

            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="errors">
          <p>
            Errors: <span><span>0</span> / 3</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

// yarn add react-router-dom redux react-redux gh-pages node-sass@4.14