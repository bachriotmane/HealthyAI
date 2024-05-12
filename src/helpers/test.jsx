import React, { useEffect, useState } from 'react';
import axiosInstance from './api.call';
 


function DataFetchingComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(localStorage.getItem('user'));
                const response = await axiosInstance.get('/analyse/1');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Hi</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
}

export default DataFetchingComponent;