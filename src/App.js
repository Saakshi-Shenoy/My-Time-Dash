import './App.css';
import Sidebar from "../src/components/sidebar.jsx";
import Dashboard from "../src/components/dashboard.jsx";

function App() {
  return (
    <div className="flex ">
      <Sidebar/>
      <Dashboard />
  </div>
  );
}

export default App;
