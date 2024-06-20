import React, { useEffect, useState } from "react";
import axios from "axios";
import "../FossilPage/fossilpage.css"

const FossilPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nookipedia.com/nh/fossils/individuals", {
                    headers: {
                        "X-API-KEY": import.meta.env.VITE_NOOK_API_KEY
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching fossils!", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="fossil-info">
            <h1>Fossil Information:</h1>
            <div className="fossil-list">
                {data.map(fossil => (
                    <div className="fossil-card" key={fossil.id}>
                        <h2>{fossil.name}</h2>
                        <img src={fossil.image_url} alt={fossil.name} />
                        <p>Interactable: {fossil.interactable}</p>
                        <p>Price: {fossil.sell}</p>
                        <p>Width: {fossil.width}</p>
                        <p>Length: {fossil.length}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FossilPage;