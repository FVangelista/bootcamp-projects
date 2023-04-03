import { useState, useReducer } from 'react';
import { GlobalCtx, initGlobalState } from './store';
import { globalReducer } from './store/reducer';

import Counter from './couter';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);

  return (
    <div className="App">
      <GlobalCtx.Provider value={{ state, dispatch }}>
        <Counter />
      </GlobalCtx.Provider>
    </div>
  );
}

export default App;
