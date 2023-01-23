import { BrowserRouter } from "react-router-dom";
import "@fontsource/poppins";
import './App.css';
import Context from "./context/dogs-context.js";
import Router from "./router.js";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Context>
  );
}

export default App;
