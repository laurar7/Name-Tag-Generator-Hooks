import React, { useEffect, useState } from "react";
import NameTag from "./NameTag";
import UserInput from "./UserInput";

const App = () => {
  const [names, setNames] = useState(
    JSON.parse(localStorage.getItem("names")) || [
      "Laura",
      "Luis",
      "Maria",
      "Octavio",
      "Daniel"
    ]
  );

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const removeName = (clickedIndex) => {
    const newNames = names.filter((_, index) => index !== clickedIndex);
    setNames(newNames);
  };

  const addName = (name) => {
    setNames([name, ...names]);
  };

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      <UserInput addName={addName} />
      {names.map((name, index) => (
        <NameTag
          name={name}
          key={index}
          removeName={removeName}
          index={index}
        />
      ))}
    </div>
  );
};

export default App;
