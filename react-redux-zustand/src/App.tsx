import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <h1>Olá</h1>
    </ReduxProvider>
  );
}