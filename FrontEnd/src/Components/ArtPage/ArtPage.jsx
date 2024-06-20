import React, { useEffect, useState } from "react";
import axios from 'axios';


const ArtPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nookipedia.com/nh/art", {
                    headers: {
                        'X-API-KEY': import.meta.env.VITE_NOOK_API_KEY
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching art!', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="art-info">
            <h1>Fish Information:</h1>
            <div className='art-list'>
                {data.map(art => (
                    <div className="art-card" key={art.id}>
                        <h2>{art.name}</h2>
                        <p>{art.url} alt={art.name}</p>
                        <p>Price: {art.sell}</p>
                        <p>Art Type: {art.art_type}</p>
                        <p>Artist: {art.author}</p>
                        <p>Year: {art.year}</p>
                        <p>Availability: {art.availability}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArtPage;