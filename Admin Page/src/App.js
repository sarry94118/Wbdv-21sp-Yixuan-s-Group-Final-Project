import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./component/home"
import Admin from "./component/admin/admin";
import PetList from "./component/admin/pet_list";
import UserList from "./component/admin/user_list";
import Login from "./component/use-login/login";
import Register from "./component/use-login/register";

function App() {
  return (
    <div className="App">
      <h4></h4>
      <BrowserRouter>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/admin" exact={true} component={Admin}></Route>
        <Route path="/pets" exact={true} component={PetList}></Route>
        <Route path="/users" exact={true} component={UserList}></Route>
        <Route path="/login" exact={true} component={Login}></Route>
        <Route path="/register" exact={true} component={Register}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
