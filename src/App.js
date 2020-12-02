import './App.css';
import store from "./store"
import { Provider } from "react-redux"
import Todo from "./pages/Todo"

function App() {
  return (
    <Provider store={store}>
      <div >
        <Todo />
      </div>
    </Provider>

  );
}

export default App;
