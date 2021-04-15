// import logo from './logo.svg';
// import './App.css';
// import SearchScreen from "./components/search-screen";
// import DetailsScreen from "./components/details-screen";
// import  {BrowserRouter, Route} from 'react-router-dom'
// import HomeScreen from "./components/home-screen";
//
// function App() {
//   return (
//
//     <div className="container-fluid">
//         <BrowserRouter>
//             <Route path={["/search", "/search/:breed"]} exact={true}>
//                 <SearchScreen/>
//             </Route>
//             <Route path={"/details/:id"} exact={true}>
//                 <DetailsScreen/>
//             </Route>
//             <Route path={"/"} exact={true}>
//                 <HomeScreen/>
//             </Route>
//
//         </BrowserRouter>
//     </div>
//   );
// }
//
// export default App;
//


import logo from './logo.svg';
import {useEffect, createContext, useState} from "react";
import './App.css';
import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import  {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from "./components/home-screen";
import DogCatSearch from "./components/dogcat-search"
import ProfilePage from "./components/profile-page"

import api from "./api/oauth-token"

export const AuthContext = createContext();
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"




function App() {
    const [accessToken, setAccessToken] = useState(null);


    useEffect(() => {
        const fetchAccessToken = async () => {
            const params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            params.append("client_id", petFinderKey);
            params.append("client_secret", petFinderSecret);
            const petfinderRes = await fetch(
                "https://api.petfinder.com/v2/oauth2/token",
                {
                    method: "POST",
                    body: params,
                }
            )

            const json = await petfinderRes.json()
            console.log(json.access_token)
            setAccessToken(json.access_token)
            // console.log(1)
            // const res = await fetch(api);
            // const json = await res.json();
            // console.log(2)
            // setAccessToken(json.access_token);
        };
        fetchAccessToken();
    }, []);

    return (
        <AuthContext.Provider value={accessToken}>
        <div className="container-fluid">

            <BrowserRouter>
                <Route path="/" exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path={["/search"]}
                       exact={true}>
                    <DogCatSearch/>
                </Route>

                <Route path={["/search/:type/:breed"]}
                       exact={true}>
                    <SearchScreen/>
                </Route>
                <Route path="/details/:type/:id" exact={true}>
                    <DetailsScreen/>
                </Route>
                <Route path="/profile/:userId" exact={true}>
                    <ProfilePage/>
                </Route>
            </BrowserRouter>

        </div>
        </AuthContext.Provider>
    );
}

export default App;

