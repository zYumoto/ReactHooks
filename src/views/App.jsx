import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import DataContext, { data } from "../data/DataContext";
import Store from "../data/Store";

const App = (props) => {
    const [state, setState] = useState(data);
    return (
      <Store>
      <div className="App">
        <DataContext.Provider value={{ state, setState }}>
          <Router>
            <Menu />
            <Content />
          </Router>
        </DataContext.Provider>
      </div>
    </Store>
    );
  };

  export default App;
