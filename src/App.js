import React from "react";
import "./App.css";
import Loader from "./components/loader";
import useAxios from "axios-hooks";
function App() {
  const [{ data, loading, error }] = useAxios("https://poetrydb.org/random");
  if (loading) return <Loader />;
  if (error) return <p>Error!</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.title}</h1>
        <div className="textHolder">
          <p>{data.lines}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
