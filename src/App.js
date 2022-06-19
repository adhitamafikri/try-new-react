import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./App.css";
import routes from "./routes";
import store from "./store";
import { AlertProvider } from "./contexts/Alert";
import Alert from "./components/Alert";

function App() {
  return (
    <ReduxProvider store={store}>
      <AlertProvider>
        <BrowserRouter>
          <div className="c-page-body">
            <Switch>
              {routes.map((route, idx) => (
                <Route key={`route-${idx}`} {...route} />
              ))}
            </Switch>
            <Alert />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </ReduxProvider>
  );
}

export default App;
