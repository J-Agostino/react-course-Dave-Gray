import logo from './logo.svg';
import './App.css';

function App() {
  const someInfo = "boolean are not rendered";
  const name = "Stalker"
  const handleNameChange = () => {
    const names = ['Juan', 'Dave', 'Paul']
    const int = Math.floor(Math.random() * 3)
    return names [int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>
          Class 02
        </h1>
        <p>
          Hello {name}!
        </p>
        <p>
          Hello also random {handleNameChange()}!
        </p>
        <p>{"String"}</p>
        <p>{420}</p>
        <p>{["Array, ", "hurrey, ", "myrey."]}</p>
        <p>[4, 2, 0]</p> {/* this is rendered as a string*/}
        {/* <p>{{we:cant, use:objects}}</p> */}
        <p>{someInfo}</p>
      </header>
    </div>
  );
}

export default App;
