import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//function Test(){
    //const [url, setUrl] = useState('');

//}

function Test(){

    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/recomenend").then(
            res => res.json()
        )
    
    
    } , []);

}


function Music(){
    const [songName, setSongName] = useState('');
    const handleSongChange = (event) => {
        setSongName(event.target.value);
    };

    const [quantity, setQuantity] = useState('');
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const [isOpen, setIsOpen] = useState(false);

    const [response, setResponse] = useState('');

    const HandleClick = () => {

        
        setIsOpen((isOpen) => !isOpen);

        fetch('/recomenend').then(
            res => res.json()
        ).then(
            data => {
                setResponse(data)
                console.log(data)
            })

    }
    /*
    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch('/callback').then(
            res => res.json()
        ).then(
            data => {
                console.log(data.status)
            })
    } , []);*/

    

    

    return(
        <div className="user">
            <h3>Get Music Recommendations</h3>
            <p>Search up a song that you enjoy listening to, and we will generate any amount of songs that match your music taste.</p>
            <input placeholder="Search Music" value={songName} onChange={handleSongChange}></input>
            <br />
            <br />
            <input placeholder="Generation Size" value={quantity} onChange={handleQuantityChange}></input>
            <button type="submit" className='submit' disabled={!quantity || !songName} onClick={HandleClick}>Generate</button>
            {isOpen && <h1>We recommend: {response.playlist}</h1>}
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Or, select one of your own playlists:</h3>

            <Link to="playlists_lists"><button type="submit" className='submit'>Use My Playlists</button></Link>

        </div>
        // still need to implement a loop that generates playlist buttons
        //each of these buttons will be a call to the backend that generates a playlist
    )
}

export default Music;