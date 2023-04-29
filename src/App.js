
import './App.css';
// import { PropsPassingasFunction } from './Components/props/props';


function App() {

  let Informations = [{
    id: '1',
    name: "manish",
    age: '22',
    place: "Odisha",
    district: "Balasore",
  },
  {
    id: '2',
    name: "manish",
    age: '22',
    place: "Odisha",
    district: "Balasore",
  }
  ]

  return (
    <div className="App">
      <ul>

        {Informations.map((element) => (
          <li key={element.id} >
            <h1>{element.name}</h1>
            <h1>{element.age}</h1>
          </li>
        ))}

      </ul>


    </div>
  );
}

export default App;
