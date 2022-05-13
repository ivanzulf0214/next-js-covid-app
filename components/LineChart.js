import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChart({ countryName, timelines }) {
    let newCases = []
    let newDeaths = []
    let dates = []

    timelines.map((timeline) => {
        newCases.push(timeline.new_confirmed)
        newDeaths.push(timeline.new_deaths)
        dates.push(timeline.date)
    })

    const data = {
        labels: dates.reverse(),
        datasets: [
            {
                label: 'New Cases',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(50,50,50,1)',
                borderColor: 'rgba(50,50,50,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(50,50,50,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(50,50,50,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: newCases.reverse()
            },
            {
                label: 'New Deaths',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,0,0,0.4)',
                borderColor: 'rgba(255,0,0,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 0, 0, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255,0,0,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: newDeaths.reverse()
            }
        ]
    };

    return (
        <div>
            <h2>{countryName}</h2>
            <BrowserView>
                <Line data={data} width={1200} height={600} />
            </BrowserView>
            <MobileView>
                <Line data={data} width={400} height={400} />
            </MobileView>
        </div>
    )
}