
import React, { useState, useEffect } from "react";
import Analysis from "./analysis";
import DailyPieChart from "./graph";

function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("daily");
  const [dailyActivities, setDailyActivities] = useState([
    { activity: "", hours: "" },
  ]);
  const [dailyIdleTime, setDailyIdleTime] = useState(24);
  const [isDailyIdleTimeZero, setIsDailyIdleTimeZero] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [monthlyActivities, setMonthlyActivities] = useState([]);
  const [quarterlyActivities, setQuarterlyActivities] = useState([]);
  const [yearlyActivities, setYearlyActivities] = useState([]);
  const [showVisualAnalysis, setShowVisualAnalysis] = useState(false); // State to control visibility

  const handleDailyChange = (index, event) => {
    const newActivities = [...dailyActivities];
    newActivities[index][event.target.name] = event.target.value;
    setDailyActivities(newActivities);
  };

  const handleDailyAdd = () => {
    if (!isDailyIdleTimeZero) {
      setDailyActivities([...dailyActivities, { activity: "", hours: "" }]);
    }
  };

  useEffect(() => {
    const spentHours = dailyActivities.reduce((total, activity) => {
      return total + parseFloat(activity.hours || 0);
    }, 0);
    const newIdleTime = 24 - spentHours;
    setDailyIdleTime(newIdleTime <= 0 ? 0 : newIdleTime);
    setIsDailyIdleTimeZero(newIdleTime <= 0);

    const calculatePeriodActivities = (multiplier) => {
      return dailyActivities.map((activity) => ({
        ...activity,
        hours: (parseFloat(activity.hours) * multiplier).toFixed(2),
      }));
    };

    setMonthlyActivities(calculatePeriodActivities(30));
    setQuarterlyActivities(calculatePeriodActivities(90));
    setYearlyActivities(calculatePeriodActivities(365));
  }, [dailyActivities]);

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setShowChart(false);
    setShowVisualAnalysis(false);
  };

  const toggleVisualAnalysis = () => {
    setShowVisualAnalysis(!showVisualAnalysis);
  };

  return (
    <div className="dashboard bg-gray-100 w-full h-95vh ml-2 p-4 rounded-lg">
      <div className="dash-content text-center">
        <h1
          className="text-2xl font-bold mb-4"
          style={{ fontSize: "30px", paddingBottom: "1%" }}
        >
          My TimeDash
        </h1>
        <div className="flex justify-center items-center gap-4 text-2xl pb-5">
          <button
            className={`${
              selectedPeriod === "daily"
                ? "bg-blue-600"
                : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
            } text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2`}
            onClick={() => handlePeriodChange("daily")}
            type="button"
          >
            Daily
          </button>
          <button
            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => setSelectedPeriod("monthly")}
            type="button"
          >
            Monthly
          </button>

          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => setSelectedPeriod("quarterly")}
            type="button"
          >
            Quarterly
          </button>

          <button
            className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => setSelectedPeriod("yearly")}
            type="button"
          >
            Yearly
          </button>
        </div>

        {selectedPeriod === "daily" && (
          <div className="flex justify-center gap-4 mt-6">
            <button
              className={`${
                showVisualAnalysis
                  ? "bg-red-600 hover:bg-red-800"
                  : "bg-green-600 hover:bg-green-800"
              } text-white font-bold py-2 px-4 rounded-lg`}
              onClick={toggleVisualAnalysis}
            >
              {showVisualAnalysis ? "Hide Visual Analysis" : "Analyse Visually"}
            </button>
          </div>
        )}

        {selectedPeriod === "daily" && showVisualAnalysis && (
          <div className="flex justify-center gap-4 mt-6">
            <div className="anal-form p-4 bg-blue-100 rounded-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">
                Daily Activity Visual Analysis
              </h2>
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
                  isDailyIdleTimeZero
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-800"
                } text-white font-bold py-2 px-4 rounded-lg mt-4`}
                disabled={isDailyIdleTimeZero}
              >
                Add Activity
              </button>
            </div>
            <div
              style={{
                width: "250px",
                height: "250px",
                marginBottom: "3%",
                marginLeft: "5%",
              }}
            >
              <DailyPieChart
                dailyActivities={dailyActivities}
                dailyIdleTime={dailyIdleTime}
                showChart={showChart}
              />
            </div>
          </div>
        )}

        {!showVisualAnalysis && (
          <Analysis
            selectedPeriod={selectedPeriod}
            dailyActivities={dailyActivities}
            monthlyActivities={monthlyActivities}
            quarterlyActivities={quarterlyActivities}
            yearlyActivities={yearlyActivities}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
