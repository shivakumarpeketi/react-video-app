import React from 'react'
import './videoitem.css'

const handleVideoSelect = videoItemProps => {
    videoItemProps.onVideoSelect(videoItemProps.video)
}

const VideoItem = (props) => {
    const videoTitle = props.video != null ? props.video.snippet.title: ''
    return (
        
        <div onClick={() => handleVideoSelect(props)} className="item video-item">
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} 
            alt={videoTitle} />
            <div className="content">
                <div clclassNameass="header">{videoTitle} </div>
            </div>
        </div>


    )
}

export default VideoItem
