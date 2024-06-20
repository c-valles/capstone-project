import React, { useEffect, useState } from "react";
import axios from "axios";
import "../BugPage/bugpage.css"

const BugPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nookipedia.com/nh/bugs", {
                    headers: {
                        "X-API-KEY": import.meta.env.VITE_NOOK_API_KEY
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching bugs!", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bug-info">
            <h1>Bug Information:</h1>
            <div className="bug-list">
                {data.map(bug => (
                    <div className="bug-card" key={bug.id}>
                        <h2>{bug.name}</h2>
                        <img src={bug.image_url} alt={bug.name} />
                        <img src={bug.render_url}/>
                        <p>Number: {bug.number}</p>
                        <p>Price: {bug.sell_nook}</p>
                        <p>Location: {bug.location}</p>
                        <p>Catchphrase: {bug.catchphrases}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BugPage;