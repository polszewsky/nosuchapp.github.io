import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import CommunityTabWrapper from "./CommunityTabWrapper";
import VotingPage from "./voting/VotingPage";

export default function CommunityRouter() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/voting`}>
        <VotingPage />
      </Route>
      <Route path={`${match.path}`}>
        <CommunityTabWrapper />
      </Route>
    </Switch>
  );
}
