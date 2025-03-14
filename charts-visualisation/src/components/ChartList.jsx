import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts'

const ChartList = () => {

    const [chartData, updateChartData] = useState([]);

    useEffect(() => {
        fetchChartData();
    }, []);

    async function fetchChartData() {
        try {
            const request = await axios.get("https://api.worldbank.org/v2/countries/IN/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json");
            updateChartData(request.data[1]);
            console.log(request.data[1]);
        } catch (error) {
            console.log(error);
        }
    }

    function renderChartData() {

        if(chartData.length) {
            const chartGenData = chartData.map((item) => {
                return {
                    name: item.data,
                    gdp: item.value
                };
            }).reverse();

            return (
                <>
                <div className="d-flex flex-column align-items-center mt-2">
                    {renderBarChartData(chartGenData)}
                    {renderAreaChartData(chartGenData)}
                </div>
                </>
            )
        }
    }

    function renderBarChartData(barChartData) {
        return (
            <>
            <BarChart width={600} height={200} data={barChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="gdp" fill='#8884d8' name="GDP of India" />
            </BarChart>
            </>
        )
    }

    function renderAreaChartData(chartData) {
        return (
            <>
            <AreaChart width={600} height={200} data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 0}} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="gdp" stroke="#8884d8" fill="#8884d8" name="GDP of India" />
            </AreaChart>
            </>
        )
    }

  return (
    <>
    <div className="container">
        {renderChartData()}
    </div>
    </>
  )
}

export default ChartList