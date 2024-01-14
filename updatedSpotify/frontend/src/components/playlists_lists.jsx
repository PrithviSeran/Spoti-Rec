import { useState, useEffect } from 'react';

function getRecomendations(){
    fetch('/').then(
        res => res.json()
    ).then(
        data => {
            console.log(data.status)
        })
}


function ShowPlaylists(){


    const [token, setToken] = useState([]);

    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        //
        fetch('/playlist').then(
            res => res.json()
        ).then(
            data => {
                setToken(data.Playlist)
                console.log(data.Playlist)
            })
    } , []);

    let items = token?.map((item) => {
        return(
            <div>
                <h4>{item.title}</h4>
            </div>
        )
    })

    return(
        <>
        <div>
            {
                items
            }
        </div>
        </>
    );

}

export default ShowPlaylists;