import React from 'react';
import {connect} from 'react-redux';

import {selectSong} from '../actions';
import SongDetail from './SongDetail';

export const RenderList = props => {
    return props.songs.map((song)=>{
        return(
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between',
                            margin: '1vw'}} key={song.title}>
            <div style={{marginRight:'5vw'}}>{song.title}</div>
            <button style={{marginRight:'5vw'}} onClick={()=>{props.selectSong(song)}}>Select</button>
            </div>
        );
    })
}

const SongList = props => {
    return(
        <div style={{display:'flex', flexDirection: 'row', flex: 1, margin: '5vw'}}>
            <div>
                <RenderList songs={props.songs} selectSong={props.selectSong}/>
            </div>
            <SongDetail />
        </div>
    )
}

const MapStateToProps = state => {
    return {songs: state.songs};
}

export default connect(MapStateToProps,{selectSong})(SongList);