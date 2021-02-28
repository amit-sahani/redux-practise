import React from 'react';
import SongDetails from './SongDetails';
import SongList from './SongList';
import './App.css';


const App = () =>{

    return (
        <div className="ui container grid">
            <div className="row">
                <div className=" nine wide column">
                    <SongList />   
                </div>
                <div className="seven wide column">
                    <SongDetails />
                </div>
            </div>
        </div>
    )
}


export default App;