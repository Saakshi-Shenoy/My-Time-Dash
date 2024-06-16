import React from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../css/side.css";

function SidebarMenu() {
  return (
    <Sidebar
      className="sidebar"
      aria-label="Sidebar with multi-level dropdown example"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>

          <Link to="/about">
            <button className="text-gray-700" style={{ paddingLeft: "23%" }}>
              About Us
            </button>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarMenu;
