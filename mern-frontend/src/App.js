import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';

const App = () => {
    const [month, setMonth] = useState('March');

    return (
        <div>
            <h1>MERN Stack Coding Challenge</h1>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </select>
            <TransactionsTable month={month} />
            <Statistics month={month} />
            <BarChartComponent month={month} />
            <PieChartComponent month={month} />
        </div>
    );
};

export default App;
