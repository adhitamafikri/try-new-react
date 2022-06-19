import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./App.css";
import routes from "./routes";
import store from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <div className="c-page-body">
          <Switch>
            {routes.map((route, idx) => (
              <Route key={`route-${idx}`} {...route} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
