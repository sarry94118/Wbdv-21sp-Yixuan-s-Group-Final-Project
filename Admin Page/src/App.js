import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./component/home"
import Admin from "./component/admin/admin";
import PetDetail from "./component/admin/pet/pet_tab";
import UserDetail from "./component/admin/user/user_detail";
import PetTab from "./component/admin/pet/pet_tab";

function App() {
  return (
    <div className="App">
      <h4></h4>
      <BrowserRouter>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path={["/admin", "/admin/:label"]} exact={true} component={Admin}></Route>
        {/*<Route path="/pets" exact={true} component={PetList}></Route>*/}
        <Route path={["/users/:userId/pets", "/users/:userId/pets/:petId"]} exact={true} component={PetTab}></Route>
        {/*<Route path="/users/:userId/pets/:petId" exact={true} component={PetDetail}></Route>*/}
        <Route path={["/users/:userId"]} exact={true} component={UserDetail}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
