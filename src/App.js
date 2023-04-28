
import './App.css';
import { PropsPassingasFunction } from './Components/props/props';


function App() {

  let Informations = {
    name:"manish",
    age:'22',
    place:"Odisha",
    district:"Balasore" ,
  }
  
  
  return (
    <div className="App">
      <PropsPassingasFunction
       PlaceDetails = {Informations} />
       
      <PropsPassingasFunction
       PlaceDetails = {Informations} />
      <PropsPassingasFunction
       PlaceDetails = {Informations} />
    </div>
  );
}

export default App;
