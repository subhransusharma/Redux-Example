import {FETCH_POST, NEW_POST}  from './types';

// export function fetchPost() {
//     console.log("FETCH POST...");
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts=> dispatch({
//             type:FETCH_POST, 
//             payload: posts
//         }));
//     }
// }

export const fetchPost = () => dispatch => {
    console.log("Fetch POST...")
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
            type:FETCH_POST, 
            payload: posts
        }));
}

export const createPost = (postData) => dispatch => {
    console.log("Create POST...")
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST', 
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type:NEW_POST, 
            payload: post
        }));
}