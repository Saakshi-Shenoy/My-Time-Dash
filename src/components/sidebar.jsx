import React from "react";
import { Sidebar } from "flowbite-react";
import {HiChartPie} from "react-icons/hi";
import "../css/side.css";

function SidebarMenu() {
  return (
    <Sidebar className="sidebar" aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" >
            About Us
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarMenu;
