import React from 'react'
import SpotifyWebPlayer from "react-spotify-web-playback"
function PlayBack({accessToken, play, setPlaying, playing}) {
  return (
    <SpotifyWebPlayer
        play={playing}
        token={accessToken} 
        uris={play ? [play] : []}
        styles={{ bgColor: "#464141", padding:"2px", w: "100%", marginTop: "120px",  marginLeft:"-600px",  color: "white"}}
        callback={(e) => {
            if(e.isPlaying){
                setPlaying(false)
            }
        }}
    />
  )
}

export default PlayBack