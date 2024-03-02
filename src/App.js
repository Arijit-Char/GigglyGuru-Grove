import { Route } from "react-router-dom";
import "./App.scss";
import { Frontpage } from "./Pages/Frontpage";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Frontpage} exact />
      <Route path="/home" component={Home} exact />
    </div>
  );
}

export default App;
