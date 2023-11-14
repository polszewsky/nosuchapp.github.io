import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import RewardsPage from "./RewardsPage";
import MyRewards from "./MyRewards";

export default function RewardsRouter() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/my-rewards`}>
        <MyRewards />
      </Route>
      <Route path={`${match.path}`}>
        <RewardsPage />
      </Route>
    </Switch>
  );
}
