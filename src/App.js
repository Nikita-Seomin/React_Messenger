import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/findUsers' element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;