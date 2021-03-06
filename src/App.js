import { Route } from 'react-router';
import './App.scss';
import GameOver from './components/GameOver';
import Main from './components/Main';
import Menu from './components/Menu';
import Rules from './components/Rules';
import Win from './components/Win';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Route exact path={['/', '/menu']} render={() => <Menu />} />
        <Route path="/main" render={() => <Main matrix={props.matrix} values={props.values} errors={props.errors} dispatch={props.dispatch} />} />
        <Route path="/win" render={() => <Win />} />
        <Route path="/gameOver" render={() => <GameOver />} />
        <Route path="/rules" render={() => <Rules />} />
      </div>
    </div>
  );
}

export default App;

// yarn add react-router-dom redux react-redux gh-pages node-sass@4.14