import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import ResultPane from "../result-pane";
// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "./App";
//
// export default () => {
//     const [results, setResults] = useState(null);
//     const accessToken = useContext(AuthContext);
//     useEffect(() => {
//         if (accessToken === null) return;
//         const fetchPets = async () => {
//             const petResults = await fetch(
//                 "https://api.petfinder.com/v2/animals",
//                 {
//                     headers: {
//                         Authorization: `Bearer ${accessToken}`,
//                     },
//                 }
//             );
//             const json = await petResults.json();
//             setResults(json.animals);
//         };
//         fetchPets();
//     }, [accessToken]);
//     if (results === null) return null;
//     return <ResultPane results={results} />;
// };
//
