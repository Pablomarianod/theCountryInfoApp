import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PopulationChart = ({ data }) => {
    const chartData = {
        labels: data.map((item) => item.year),
        datasets: [
            {
                label: 'Population',
                data: data.map((item) => item.population),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default PopulationChart;