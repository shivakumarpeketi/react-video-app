import { useState, useEffect } from 'react'
import Youtube from '../../../apis/Youtube'

// Custom hook to search and fetach videos for given search key
function useVideos(defaultKey) {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        handleSearchSubmit(defaultKey)
    }, [defaultKey])

    const handleSearchSubmit = async (searchKey) => {
        console.log('Serach Text: ' + searchKey)
        const response = await Youtube.get('/search', {
            params: {
                q: searchKey
            }
        })
        setVideos(response.data.items)
    }
    return [videos, handleSearchSubmit];
}

export default useVideos
