import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopCausesChart = ({ data }) => {

  const chartData = {
    labels: data.map(entry => entry.cause),
    datasets: [
      {
        label: 'Principales Causas de Muerte en Hombres',
        data: data.map(entry => entry.deaths),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#F7786B',
          '#8E44AD',
          '#2ECC71',
        ],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw} muertes`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default TopCausesChart;
