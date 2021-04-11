import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Youtube from './apis/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class VideoApp extends Component {

    state = { videos: [], selectedVideo: null }

    componentDidMount(){
        this.handleSearchSubmit("aiswaryamanasvi")
    }

    handleSearchSubmit = async (searchKey) => {
        console.log('Serach Text: '+ searchKey)
        const response = await Youtube.get('/search', {
            params: {
                q: searchKey
            }
        })
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
        console.log(`VideoApp Select: ${video.snippet.title}`)
    }
    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.handleSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList
                                onVideoSelect={this.handleVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
