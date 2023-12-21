import "./index.css"
import Hooks from "../src/components/Hooks"
import Debouncing from './components/Basics/Debouncing';
import Throttling from "./components/Basics/Throttling";
import CallBindApply from "./components/Basics/CallBindApply";
import Currying from "./components/Basics/Currying";
import Flatten from "./components/Flatten";
import SetTimeout from "./components/Basics/SetTimeout";
import CompositeFuncs from "./components/CompositeFuncs";

function App() {


  return (
    <div>
      <Hooks />
      <Debouncing />
      <Throttling />
      <CallBindApply />
      <Currying />
      <Flatten />
      <SetTimeout />
      <CompositeFuncs />
    </div>

  );
}

export default App;
