import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

const SongList = (props) =>{

    const createSongChilds =()=>{
        //console.log
            return props.songs.map(song=>{
                return (<div className="item" key={song.song}>
                            <div className="right floated content">
                                <button 
                                    className="ui button primary"
                                    onClick={()=>{
                                        props.selectSong(song)}}
                                    >
                                    Select
                                </button>
                            </div>
                            <div className="content">
                                {`Song is ${song.song} and duration is ${song.duration}`}
                            </div>
                        </div>)})
    }

    return (<div className="ui middle aligned divided list">
                <h3>Here is the list of songs.</h3>
                {createSongChilds()}
            </div>)
}

const mapStateToProps = (state) => {
    console.log(state)
    return {songs:state.songs}
}

export default connect(mapStateToProps, {selectSong:selectSong})(SongList)