import logo from './logo.svg';
import './App.css';
import Home from './Home/home';
import { Grid2 } from '@mui/material';
import Navbar from './Home/navbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Grid2 container direction={"column"}>
        <Grid2 item>
          <Navbar/>
        </Grid2>
        <Grid2 item>
          <Home/>
        </Grid2>
      </Grid2>
      
    </div>
  );
}

export default App;
