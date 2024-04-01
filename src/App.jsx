import "./App.css";

import { TagsList } from "./components/TagsList/TagsList.jsx";

const App = () => {
  return (
    <div className="container flex">
      <h1>Przeglądarka Tagów</h1>
      <TagsList />
    </div>
  );
};

export default App;
