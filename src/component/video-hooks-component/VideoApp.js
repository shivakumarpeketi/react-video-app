import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from './customhooks/useVideos'

const VideoApp = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, videosSearchFn] = useVideos('Telugu Music')
    
    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={videosSearchFn} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList
                            onVideoSelect={(userSelectedVideo) => setSelectedVideo(userSelectedVideo)}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoApp;

