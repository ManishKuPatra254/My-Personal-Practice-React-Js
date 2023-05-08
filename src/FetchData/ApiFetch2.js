import axios from 'axios';
// import { useState } from 'react';


export function PostApiFetch() {

    function apiUse() {
        axios.post('https://jsonplaceholder.typicode.com/posts')
            .then(response => console.log(response.headers.location))
            .catch(error => console.log(error))
    }
    return (
        <>
            <button onClick={apiUse}>Post Api</button>
        </>
    )
}