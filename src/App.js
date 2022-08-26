import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <SearchParams />
      <Pet name="Kyra" animal="Dog" breed="Zaguate" />
      <Pet name="Coffee" animal="Dog" breed="Zaguate" />
      <Pet name="Negra" animal="Cat" breed="Zaguate" />
    </div>
  );
};

/*
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Kyra",
      animal: "Dog",
      breed: "Zaguate",
    }),
    React.createElement(Pet, {
      name: "Coffee",
      animal: "Dog",
      breed: "Zaguate",
    }),
    React.createElement(Pet, {
      name: "Bastarda",
      animal: "Cat",
      breed: "Zaguate",
    }),
  ]);
};
*/
render(<App />, document.getElementById("root"));

//render(React.createElement(App), document.getElementById("root"));
