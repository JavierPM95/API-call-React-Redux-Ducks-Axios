import "./App.css";
import { Provider } from "react-redux";
import generateStore from "./Redux/Store";
import { ThemeProvider } from "@material-ui/core";
import theme from "./MuiThemeConfig";
import Container from "./Components/Container";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
