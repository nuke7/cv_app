import "./App.css";
import { useState, useEffect } from "react";
import TextArea from "./components/TextArea";
import ResetButton from "./components/ResetButton";
/* import TextDiv from "./components/TextDiv"; */

function App() {
  let [data, setData] = useState();
  let headings = [];

  const getData = () => {
    try {
      fetch("http://localhost:3000/cv-1.json")
        .then((response) => response.json())
        .then((json) => {
          setData(() => json);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    /* fetch("http://localhost:3000/cv-1.json")
      .then((response) => {
        if (response.status !== 200) return "There must be a problem";
        return response.json();
      })
      .then((json) => setData(json))
      .then(console.log(data.basics)); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(data);

  if (data !== undefined) {
    for (let i = 0; i < Object.keys(data.basics).length; i++) {
      headings.push(Object.keys(data.basics)[i]);
    }
  }

  console.log(headings);

  return (
    <div className="App">
      <ResetButton />
      <div className="info_wrapper">
        {data &&
          Object.keys(data.basics).map((elem, index) => {
            return (
              <div className="info_wrapper_cards">
                <h2 key={index}>{elem}</h2>
                {console.log(Object.values(data.basics)[index])}
                <textarea key={Math.floor(Math.random() * 100)}>
                  {Object.values(data.basics)[index]}
                </textarea>
              </div>
            );
          })}
      </div>
      <TextArea />
    </div>
  );
}

export default App;
