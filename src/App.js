
import './App.css';
import { PropsPassing } from './Components/props/props';

function App() {
  return (
    <div className="App">
      <PropsPassing btnname="Submit Here" />
      <PropsPassing btnname = "Don't Submit Here"/>
      <PropsPassing btnname = " Submit Now"/>
    </div>
  );
}

export default App;
