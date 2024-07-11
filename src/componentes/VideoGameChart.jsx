import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const VideoGameChart = ({ data }) => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default VideoGameChart;
