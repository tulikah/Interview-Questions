import "./index.css"
import Hooks from "../src/components/Hooks"
import Debouncing from './components/Basics/Debouncing';
import Throttling from "./components/Basics/Throttling";
import CallBindApply from "./components/Basics/CallBindApply";
import Currying from "./components/Basics/Currying";
import Flatten from "./components/Flatten";

function App() {


  return (
    <div>
      <Hooks />
      <Debouncing />
      <Throttling />
      <CallBindApply />
      <Currying />
      <Flatten />
    </div>

  );
}

export default App;
