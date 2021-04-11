import React from 'react'

function VideoDetail({ video }) {
    let videoSrc;
    if (video == null)
        return <div>Loading...</div>;
    else
        videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <>
            <div className="ui embed">
            <iframe src={video != null ? videoSrc : ''} width="665" height="315"
                    title={video != null ? video.snippet.title : ''} />
                {/*  width="560" height="315"   title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe> */}
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video != null ? video.snippet.title : 'Please Select Videos...!'}</h4>
                <p>{video != null ? video.snippet.description : ''}</p>
            </div>
        </>
    )
}

export default VideoDetail
