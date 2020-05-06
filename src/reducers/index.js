import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: 'Blank Space', singer: 'Taylor Swift', year: '2014', img:'https://fitanisya.files.wordpress.com/2015/03/taylor-swift-blank-space.jpg'},
        {title: 'Baby One More Time', singer: 'Britney Spears', year:'1998', img:'http://2.bp.blogspot.com/-ixrhhe3_x_4/TrbsNjnffTI/AAAAAAAABYs/WiAsaeleaok/s320/_..Baby+One+More+Time+%2528Video%2529.jpg'},
        {title: 'Everybody', singer: 'Backstreet Boys', year:'1997', img:'https://fthmb.tqn.com/TM8AkV8RnsRd2XF0-uTDuJkzyVo=/768x0/filters:no_upscale()/backstreet-boys-everybody-57365c153df78c6bb093bf82.jpg'},
        {title: 'Rolling in the Deep', singer: 'Adele', year: '2012', img: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Adele-Rolling_In_The_Deep.jpg'},
        {title: 'Call Me Maybe', singer: 'Carly Rae Jepsen', year: '2012', img:'http://4.bp.blogspot.com/-uRd_wdIPcDY/UIwKMoB_XGI/AAAAAAAGIUI/3vB1MRDjVgg/s1600/Carly%2BRae%2BJepsen%2B-%2BCall%2BMe%2BMaybe%2B3.jpeg'},
        {title: 'Uptown Funk', singer: 'Mark Ronson and Bruno Mars', year: '2015', img:'https://i.ytimg.com/vi/niMcILvhW-k/maxresdefault.jpg'},
        {title: 'Firework', singer: 'Katy Perry', year: '2010', img:'https://2.bp.blogspot.com/_zjVydElJEho/TUTFxjTtm8I/AAAAAAAAEAo/A7fKcljUipk/s1600/Made%2Bby%2Bcaliizthoo.jpg'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});