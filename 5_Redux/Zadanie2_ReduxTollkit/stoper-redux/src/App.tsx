import React from 'react';
import {Provider} from "react-redux";
import {store} from "./app/store";
import Stoper from "./features/stoper/Stoper";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Stoper />
          </div>
      </Provider>
  );
}

export default App;
