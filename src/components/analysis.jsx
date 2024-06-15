import React, { useState, useEffect } from "react";
import "../css/analysis.css";

const Analysis = ({ selectedPeriod }) => {
  const totalHoursPerDay = 24;
  const daysInMonth = 30;

  // State for daily analysis
  const [dailyActivities, setDailyActivities] = useState([{ activity: "", hours: "" }]);
  const [dailyIdleTime, setDailyIdleTime] = useState(totalHoursPerDay);
  const [isDailyIdleTimeZero, setIsDailyIdleTimeZero] = useState(false);

  // State for monthly analysis
  const [monthlyActivities, setMonthlyActivities] = useState([]);
  const [monthlyTotalHours, setMonthlyTotalHours] = useState(0);
  const [monthlyIdleTime, setMonthlyIdleTime] = useState(720); // Initial idle time assumption
  const [isMonthlyIdleTimeZero, setIsMonthlyIdleTimeZero] = useState(false);

  // Function to handle change in daily activities
  const handleDailyChange = (index, event) => {
    const newActivities = [...dailyActivities];
    newActivities[index][event.target.name] = event.target.value;
    setDailyActivities(newActivities);
  };

  // Function to add new activity in daily analysis
  const handleDailyAdd = () => {
    if (!isDailyIdleTimeZero) {
      setDailyActivities([...dailyActivities, { activity: "", hours: "" }]);
    }
  };

  // Effect to calculate daily idle time
  useEffect(() => {
    const spentHours = dailyActivities.reduce((total, activity) => {
      return total + parseFloat(activity.hours || 0);
    }, 0);
    const newIdleTime = totalHoursPerDay - spentHours;
    setDailyIdleTime(newIdleTime <= 0 ? 0 : newIdleTime);
    setIsDailyIdleTimeZero(newIdleTime <= 0);
  }, [dailyActivities]);

  // Effect to update monthly analysis based on daily activities
  useEffect(() => {
    // Calculate total hours and idle time for the month
    const totalMonthlyHours = dailyActivities.reduce((total, activity) => {
      return total + (parseFloat(activity.hours) || 0);
    }, 0) * daysInMonth;

    const monthlyActiveHours = totalMonthlyHours;
    const calculatedIdleTime = 720 - monthlyActiveHours;

    // Update monthly activities based on daily entries
    const calculatedActivities = dailyActivities.map((activity) => ({
      activity: activity.activity,
      hours: (parseFloat(activity.hours) || 0) * daysInMonth,
    }));
    setMonthlyActivities(calculatedActivities);

    // Update state for monthly analysis
    setMonthlyTotalHours(totalMonthlyHours);
    setMonthlyIdleTime(calculatedIdleTime);
    setIsMonthlyIdleTimeZero(calculatedIdleTime <= 0);
  }, [dailyActivities, daysInMonth]);

  switch (selectedPeriod) {
    case "daily":
      return (
        <div className="anal-form p-4 bg-blue-100 rounded-lg w-full max-w-md mx-auto mt-6 pt-2">
          <h2 className="text-2xl font-bold mb-4">Daily Activity Analysis</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Total Hours in a Day</label>
            <input
              type="number"
              value={totalHoursPerDay}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              placeholder="Total hours is fixed at 24"
            />
          </div>
          {dailyActivities.map((activity, index) => (
            <div key={index} className="flex items-center mb-3">
              <input
                type="text"
                name="activity"
                value={activity.activity}
                onChange={(event) => handleDailyChange(index, event)}
                placeholder="Activity"
                className="w-1/2 p-2 border border-gray-300 rounded mr-2"
              />
              <input
                type="number"
                name="hours"
                value={activity.hours}
                onChange={(event) => handleDailyChange(index, event)}
                placeholder="Hours"
                className="w-1/2 p-2 border border-gray-300 rounded mr-2"
              />
            </div>
          ))}
          <button
            onClick={handleDailyAdd}
            className={`${
              isDailyIdleTimeZero ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800"
            } text-white font-bold py-2 px-4 rounded-lg mt-4`}
            disabled={isDailyIdleTimeZero}
          >
            Add Activity
          </button>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Idle Time: {dailyIdleTime.toFixed(2)} hours</h3>
          </div>
        </div>
      );

      case "monthly":
        const idleTimeInDays = monthlyIdleTime / 24;
      
        return (
          <div className="anal-form p-4 bg-blue-100 rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4">Monthly Activity Analysis</h2>
            {monthlyActivities.map((activity, index) => (
              <div key={index} className="flex items-center mb-3 font-semibold">
                <div className="w-1/2 p-2 border border-gray-300 rounded mr-2">{activity.activity}</div>
                <div className="w-1/2 p-2 border border-gray-300 rounded mr-2">{activity.hours.toFixed(2)} hours</div>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="text-xl font-bold">Total Hours: {monthlyTotalHours.toFixed(2)} hours</h3>
              <h3 className="text-xl font-bold">Idle Time: {monthlyIdleTime.toFixed(2)} hours = ( {idleTimeInDays.toFixed(2)} days! )</h3>
            </div>
          </div>
        );

      case "quarterly":
      return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
          <h2 className="text-2xl font-bold mb-4">Quarterly Activity Analysis</h2>
          {/* Add your form fields and logic here */}
        </div>
      );
    case "yearly":
      return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
          <h2 className="text-2xl font-bold mb-4">Yearly Activity Analysis</h2>
          {/* Add your form fields and logic here */}
        </div>
      );
    default:
      return null;
  }
};

export default Analysis;
