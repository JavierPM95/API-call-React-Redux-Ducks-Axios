import "./App.css";
import Navbar from "./Components/Navbar";
import Pokemon from "./Components/Pokemon";
import {Provider} from "react-redux";
import generateStore from "./Redux/Store";

function App() {
  
  const store = generateStore();

  return (
    <Provider store={store} >
      <Navbar />
      <Pokemon />
    </Provider>
  );
}

export default App;
