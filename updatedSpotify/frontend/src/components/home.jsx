import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";


function User(){

    const [url, setUrl] = useState('');

    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/login").then(
            res => res.json()
        ).then(
            data => {
                setUrl(data.url)
                console.log(data.url)
            })
    } , []);


    //change the button to route to the login page after merging back and front end
    return (
        <>
        <div className="user">
            <h3>Hello!</h3>
            <h3>Welcome to SpotiRec  <FontAwesomeIcon icon={faHeadphones}/></h3>
            <p>At SpotiRec, we understand the power of music to inspire, uplift, and connect people across the globe. You're in the right place if you're looking for fresh music and undiscovered gems. Our passion is curating a diverse collection of new music from your Spotify history that transcends genres and boundaries, ensuring that every visit to our site is a journey of sonic adventure.</p>
            <br />
            <p>Let's get started by logging in to your Spotify account:</p>
            <br/>
            <a href={url}><button type="submit" className='submit'>Connect Spotify Account</button></a>

        </div>
        </>
    )
}

export default User;