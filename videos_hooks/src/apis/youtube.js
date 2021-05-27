import axios from 'axios';

const KEY = 'AIzaSyDAvcpWPMCmbrJ-ydrDqOSJA3w0Gig33bQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
