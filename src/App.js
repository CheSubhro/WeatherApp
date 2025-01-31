
import './App.css';
import Home  from "./components/pages/Home/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={ <Home/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
