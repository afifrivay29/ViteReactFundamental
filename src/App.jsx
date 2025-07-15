import { GlobalContext } from "./content"; 

import "./App.css";
import Home from "./pages/Homepage";

function App() {
  const user = {
   username: "Afif",
  }


  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <Home />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
