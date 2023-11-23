import { Provider } from "react-redux";
import "./App.css";
import Router from "./shared/Router";
import store from "./redux/configStore";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
