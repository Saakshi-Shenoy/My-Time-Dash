import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DailyPieChart = ({ dailyActivities, dailyIdleTime }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Hours',
        data: [],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  });

  useEffect(() => {
    updateChartData();
  }, [dailyActivities, dailyIdleTime]);

  const updateChartData = () => {
    const activityLabels = dailyActivities.map(activity => activity.activity || "Unnamed Activity");
    const activityHours = dailyActivities.map(activity => parseFloat(activity.hours) || 0);

    // Filter out activities with 0 hours
    const filteredActivityLabels = activityLabels.filter((_, index) => activityHours[index] > 0);
    const filteredActivityHours = activityHours.filter(hours => hours > 0);

    // Add idle time to the labels and data if idle time is greater than 0
    if (dailyIdleTime > 0) {
      filteredActivityLabels.push("Idle Time");
      filteredActivityHours.push(dailyIdleTime);
    }

    const updatedChartData = {
      ...chartData,
      labels: filteredActivityLabels,
      datasets: [{
        ...chartData.datasets[0],
        data: filteredActivityHours
      }]
    };

    setChartData(updatedChartData);
  };

  return (
    <div>
      <h2>Daily Activity Breakdown</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default DailyPieChart;
