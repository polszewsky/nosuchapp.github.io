import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import StatisticPage from "./StatisticPage";

export default function StatisticRouter() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}`}>
        <StatisticPage />
      </Route>
    </Switch>
  );
}
