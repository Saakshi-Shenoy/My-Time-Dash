import React, { useState, useEffect } from "react";

const DailyAnalysis = () => {
  const totalHours = 24;
  const [activities, setActivities] = useState([{ activity: "", hours: "" }]);
  const [idleTime, setIdleTime] = useState(totalHours);
  const [isIdleTimeZero, setIsIdleTimeZero] = useState(false);

  const handleChange = (index, event) => {
    const newActivities = [...activities];
    newActivities[index][event.target.name] = event.target.value;
    setActivities(newActivities);
  };

  const handleAdd = () => {
    if (!isIdleTimeZero) {
      setActivities([...activities, { activity: "", hours: "" }]);
    }
  };

  useEffect(() => {
    const spentHours = activities.reduce((total, activity) => {
      return total + parseFloat(activity.hours || 0);
    }, 0);
    const newIdleTime = totalHours - spentHours;
    setIdleTime(newIdleTime <= 0 ? 0 : newIdleTime);
    setIsIdleTimeZero(newIdleTime <= 0);
  }, [activities]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Daily Activity Analysis</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Total Hours in a Day</label>
        <input
          type="number"
          value={totalHours}
          readOnly
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          placeholder="Total hours is fixed at 24"
        />
      </div>
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type="text"
            name="activity"
            value={activity.activity}
            onChange={(event) => handleChange(index, event)}
            placeholder="Activity"
            className="w-1/2 p-2 border border-gray-300 rounded mr-2"
          />
          <input
            type="number"
            name="hours"
            value={activity.hours}
            onChange={(event) => handleChange(index, event)}
            placeholder="Hours"
            className="w-1/2 p-2 border border-gray-300 rounded mr-2"
          />
        </div>
      ))}
      <button
        onClick={handleAdd}
        className={`${
          isIdleTimeZero ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        } text-white font-bold py-2 px-4 rounded-lg mt-4`}
        disabled={isIdleTimeZero}
      >
        Add Activity
      </button>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Idle Time: {idleTime} hours</h3>
      </div>
    </div>
  );
};

const MonthlyAnalysis = () => (
  <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
    <h2 className="text-2xl font-bold mb-4">Monthly Activity Analysis</h2>
    {/* Add your form fields and logic here */}
  </div>
);

const QuarterlyAnalysis = () => (
  <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
    <h2 className="text-2xl font-bold mb-4">Quarterly Activity Analysis</h2>
    {/* Add your form fields and logic here */}
  </div>
);

const YearlyAnalysis = () => (
  <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
    <h2 className="text-2xl font-bold mb-4">Yearly Activity Analysis</h2>
    {/* Add your form fields and logic here */}
  </div>
);

const Analysis = ({ selectedPeriod }) => {
  switch (selectedPeriod) {
    case "daily":
      return <DailyAnalysis />;
    case "monthly":
      return <MonthlyAnalysis />;
    case "quarterly":
      return <QuarterlyAnalysis />;
    case "yearly":
      return <YearlyAnalysis />;
    default:
      return null;
  }
};

export default Analysis;
