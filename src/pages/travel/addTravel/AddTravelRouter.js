import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import AddTravelPage from "./AddTravelPage";

export default function AddTravelRouter() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}`}>
        <AddTravelPage />
      </Route>
    </Switch>
  );
}
