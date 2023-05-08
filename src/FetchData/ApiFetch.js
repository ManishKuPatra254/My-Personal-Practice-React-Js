import axios from 'axios';
import { useEffect, useState } from 'react';

export function ApiFetch() {

    const [fetch, setFetch] = useState('Hii');

    function handleClick() {

        const url = 'https://dog.ceo/api/breeds/image/random'

        axios.get(url)
            .then(response => setFetch(response.data.message))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        handleClick()
    }, [])


    return (
        <>
            <img src={fetch} alt="" />
            <button onClick={handleClick}>Saa</button>
        </>
    )
}