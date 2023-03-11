import "./App.css";
import Header from "./Component/Header.js";
import MiPhone from "./Component/MiPhones.js";
import Tv from "./Component/TV.js";

import data from "./Component/data/data.json";

function App() {
  return (
    <>
      <Header />
      <MiPhone miList={data.miPhones} />
      <Tv tvlist={data.tv} />
    </>
  );
}

export default App;
