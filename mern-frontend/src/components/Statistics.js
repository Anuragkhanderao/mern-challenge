import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = ({ month }) => {
    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        fetchStatistics();
    }, [month]);

    const fetchStatistics = async () => {
        const response = await axios.get(`/api/statistics`, { params: { month } });
        setStatistics(response.data);
    };

    return (
        <div>
            <h2>Statistics</h2>
            <div>Total Sale Amount: {statistics.totalSaleAmount}</div>
            <div>Total Sold Items: {statistics.totalSoldItems}</div>
            <div>Total Not Sold Items: {statistics.totalNotSoldItems}</div>
        </div>
    );
};

export default Statistics;
