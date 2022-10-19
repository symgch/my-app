import logo from './logo.svg';
import './App.css';

function App() {
  //Format 1
  const name = 'Shuhei';
  const element = <h1>Hello, {name}</h1>

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  //Format 2
  const user = {
    firstName: 'Shuhei',
    lastName: 'Yamaguchi'
  };
  
  const elem2 = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {elem2}
        </p>
        </header>
    </div>
  );
}

export default App;


// {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       {/* <img src={logo} className="App-logo" alt="logo" /> */}