import React from 'react'
import VideoItem from './VideoItem'
const VideoList = ({ videos, onVideoSelect }) => {

    let i = 1;
    const videoList = videos.map((video) => {
        return <VideoItem key={i++} video={video} onVideoSelect={onVideoSelect} />
    })
    return (
        <>
            <div className="ui relaxed divided list">{videoList}</div>
        </>
    )
}

export default VideoList;
