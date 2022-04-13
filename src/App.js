import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profiles' element={<Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs store={props.store}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;