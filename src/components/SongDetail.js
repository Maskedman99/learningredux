import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
    return props.song === null ? (<div>Select a Song</div>):(
        <div>
            <div>{props.song.title}</div>
            <div>{props.song.singer}</div>
            <div>{props.song.year}</div>
            <img src={props.song.img} alt='' width='300' height='300'/>
        </div>
    );
}

const mapStateToProps = state => {
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);