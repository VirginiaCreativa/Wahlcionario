import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Layouts from "./layouts/Layout";

const App = () => (
  <Router>
    <Layouts>
      <Routes />
    </Layouts>
  </Router>
);
export default App;
