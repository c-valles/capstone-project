import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../FishPage/fishpage.css"

const FossilPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nookipedia.com/nh/fish", {
                    headers: {
                        'X-API-KEY': import.meta.env.VITE_NOOK_API_KEY
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching fish!', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="fish-info">
            <h1>Fish Information:</h1>
            <div className='fish-list'>
                {data.map(fish => (
                    <div className="fish-card" key={fish.id}>
                        <h2>{fish.name}</h2>
                        <img src={fish.image_url} alt={fish.name} />
                        <img src={fish.render_url}/>
                        <p>Number: {fish.number}</p>
                        <p>Price: {fish.sell_nook}</p>
                        <p>Location: {fish.location}</p>
                        <p>Catchphrase: {fish.catchphrase}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FossilPage;