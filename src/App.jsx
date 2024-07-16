import React from "react";
import data from "./assets/data.json";
import Card from "./components/Card/card";
import "./App.css";

function App() {
  console.log(data);
  return (
    <div className="container">
      {data.length &&
        data.map((el, index) => {
          return <Card key={index} data={el} />;
        })}
    </div>
  );
}

export default App;
