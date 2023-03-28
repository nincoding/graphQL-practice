import { useEffect, useState } from "react";
import './App.css';
import { repo } from "./refo";

function App() {
  const [repository, setRepository] = useState(null);
  const [viewer, setViewer] = useState(null);

  useEffect(() => {
    repo()
      .then((data) => {
        setRepository(data.repository);
        setViewer(data.viewer);
      })
      .catch((error) => {
        console.error(Error, error);
      });
  }, []);

  console.log(repository);
  console.log(viewer);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
