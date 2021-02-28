import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props)=>{

    return (
        <div className="song-details">
            <div className="content">
                <b>Song Title: </b>{props.song==null?"No song selected":props.song.song}
            </div>
            <div className="content">
                <b>Song Duration: </b>{props.song==null?"0.00":props.song.duration}
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);