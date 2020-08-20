import React from "react";
import "./App.css";
import Loader from "./components/loader";
import useAxios from "axios-hooks";
import { CSSTransition } from "react-transition-group";
function App() {
  const [{ data, loading, error }] = useAxios("https://poetrydb.org/random");
  if (loading) return <Loader />;
  if (error) return <p>Error!</p>;

  function LinesList(props) {
    const data = props.data;
    const textLines = data.lines.map((line, index) => (
      <p key={index}>{line}</p>
    ));
    return textLines;
  }

  return (
    <div className="App">
      <header className="App-header">
        <CSSTransition in={true} classNames="fade" appear={true} timeout={600}>
          <div>
            <h1>{data.title}</h1>
              <LinesList data={data} />
          </div>
        </CSSTransition>
      </header>
    </div>
  );
}

export default App;
