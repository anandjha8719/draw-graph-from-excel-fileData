import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

const pdata = [
    {
        productKey: 1,
        accuracy: 95
    },
    {
        productKey: 2,
        accuracy: 88
    },
    {
        productKey: 3,
        accuracy: 78
    },
    {
        productKey: 4,
        accuracy: 84
    },
    {
        productKey: 5,
        accuracy: 100
    },
    {
        productKey: 6,
        accuracy: 94
    },
    {
        productKey: 7,
        accuracy: 84
    },
    {
        productKey: 8,
        accuracy: 76
    },
    {
        productKey: 9,
        accuracy: 88
    },
    {
        productKey: 10,
        accuracy: 91
    },
]

export const Home = () => {
    return <div>
        <h1>Home</h1>
        <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata}>
            <XAxis dataKey="productKey" interval={'preserveStartEnd'}/>
            <YAxis dataKey="accuracy" interval={'preserveStartEnd'}/>
            <Line dataKey="accuracy" />
        </LineChart>
        </ResponsiveContainer>

    </div>
};