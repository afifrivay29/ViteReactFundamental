import { GlobalContext } from "./content"; 
import { RouterProvider } from "react-router-dom"
import { router } from "./routers";

import "./App.css";

function App() {
  const user = {
   username: "Afif",
  }


  return (
    <>
      <div className="App">
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
