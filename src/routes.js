import { Switch, Route } from "react-router-dom"
import Dash from "./components/Dash"
import Promises from "./components/Promises"
import AsyncAwait from "./components/AsyncAwait"
import Throw from "./components/Throw"

export default (
  <Switch>
    <Route exact path="/" component={Dash} />
    <Route path="/promises" component={Promises} />
    <Route path="/async-await" component={AsyncAwait} />
    <Route path="/throw" component={Throw} />
  </Switch>
)
