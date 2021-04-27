import React, {useState} from 'react'
import petsReducer from "../../reducer/pet-reducer";
import {combineReducers, createStore} from "redux";
import {Link, useParams, useHistory} from "react-router-dom";
import PetCard from "../grid/pet-card"
import {Provider} from "react-redux";

const reducer = combineReducers({
    petsReducer: petsReducer,
})

const store = createStore(reducer)


const PetCardMainPage = () => {
    // const [history] = useHistory()

    return (<Provider store={store}>
        <div>
            {/*<Link to={`/profile`}>*/}
            {/*    <a className="fas fa-arrow-left fa-2x text-dark float-md-right">Back</a>*/}
            {/*</Link>*/}

            {/*<a className="fas fa-arrow-left fa-2x text-dark float-md-right" onClick={() => history.goBack()}>Back</a>*/}
            <PetCard/>
            {/*<PetCard/>*/}

        </div>
    </Provider>)
}


export default PetCardMainPage