import axios from 'axios';

const YOUTUBE_API_KEY = 'Youtube V3 API Access Key';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: YOUTUBE_API_KEY,
    }
});
