import React from "react";
import "../css/about.css";
import { Accordion } from "flowbite-react";

function About() {
  return (
    <div className="about w-full h-95vh ml-2 p-4 rounded-lg">
        <h1 className="text-white text-4xl font-semibold text-center pb-5">ABOUT US</h1>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>How does the Time Tracker help me?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white dark:text-white">
            The Time Tracker helps you manage your time more efficiently by allowing you to log daily activities, track hours spent on each task, and analyze productivity trends.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What time periods can I analyze with the Time Tracker?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white dark:text-gray-400">
            You can analyze your productivity on a daily, monthly, quarterly, and yearly basis using the Time Tracker.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          Can I add custom activities to track?         
           </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white dark:text-gray-400">
            Yes, you can add custom activities and specify the time spent on each one to get a comprehensive view of your day.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          Is my data secure with the Time Tracker?        
           </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white dark:text-gray-400">
            Yes, your data is securely stored and only accessible to you. We prioritize data privacy and protection.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default About;
