import { Route } from "@solidjs/router";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Education from "./pages/Education";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/company" component={Company} />
      <Route path="/education" component={Education} />
    </>
  );
}

export default App;
