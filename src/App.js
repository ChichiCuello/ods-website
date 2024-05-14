import React from 'react';
import {Navbar} from './components/Navbar';

function App(props) {
  return (
    <div className="main-container">
      <Navbar />
      {props.children}
    </div>
  );
}

export default App;
