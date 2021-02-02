import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationComponent from './components/navigation';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavigationComponent></NavigationComponent>
      </Router>
    </div>
  );
}

export default App;
