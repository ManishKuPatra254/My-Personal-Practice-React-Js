
import './App.css';
import { RefferenceHooks } from './Hooks/UseRef';
import { EffectHooks } from './Hooks/UseEffect';
import { ApiFetch } from './FetchData/ApiFetch';
import { PostApiFetch } from './FetchData/ApiFetch2';

function App() {
  return (
    <div className="App">
      <RefferenceHooks />
      <EffectHooks />
      <ApiFetch />
      <PostApiFetch />
    </div>
  );
}

export default App;
