import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from './Home'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <h1>
              about <a href="#">go back</a>
            </h1>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
