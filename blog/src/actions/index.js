import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FERCH_POSTS', payload: response});
    };