import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const PieChart = () => {
  // Define the data for the chart
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    height: 400,
    width: 600,
    plugins: {
      legend: {
        position: 'bottom', // Adjust the position as desired
      }
    }
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
