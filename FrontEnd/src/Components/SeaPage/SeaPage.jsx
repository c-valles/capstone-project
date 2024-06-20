import React, { useEffect, useState } from "react";
import axios from "axios";
import "../SeaPage/seapage.css";

const SeaPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nookipedia.com/nh/sea", {
                    headers: {
                        "X-API-KEY": import.meta.env.VITE_NOOK_API_KEY
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching sea creatures!", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="sea-info">
            <h1>Sea Creature Information:</h1>
            <div className='sea-list'>
                {data.map(sea => (
                    <div className="sea-card" key={sea.id}>
                        <h2>{sea.name}</h2>
                        <img src={sea.image_url} alt={sea.name} />
                        <img src={sea.render_url}/>
                        <p>Number: {sea.number}</p>
                        <p>Price: {sea.sell_nook}</p>
                        <p>Location: {sea.location}</p>
                        <p>Shadow Size: {sea.shadow_size}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeaPage;