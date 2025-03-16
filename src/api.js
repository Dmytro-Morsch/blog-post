const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getPosts() {
    return fetch(`${BASE_URL}/posts`)
        .then(handleResponse).catch(handleError);
}

export function createPost(post) {
    return fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(post)
    }).then(handleResponse).catch(handleError);
}

export function updatePost(post) {
    return fetch(`${BASE_URL}/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post)
    }).then(handleResponse).catch(handleError);
}

export function deletePost(postId) {
    return fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'DELETE'
    }).then(handleResponse).catch(handleError);
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}

function handleError(error) {
    //Consider displaying the error on UI
    return console.error('Fetch error:', error);
}