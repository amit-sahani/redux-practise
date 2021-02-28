import {combineReducers} from 'redux';


const songListReducer = () =>{
    return [
        {song: 'Gerua', duration: 2.38},
        {song: 'Khamoshiya', duration: 4.02 },
        {song: 'Teri meri', duration: 3.30},
        {song: 'Keh do na you are my soina', duration: 5.00}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SELECTED_SONG'){
        return action.payload ;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songListReducer,
    song: selectedSongReducer
});