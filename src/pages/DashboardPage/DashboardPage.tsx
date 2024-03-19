import React from "react";
import styles from "./DashboardPage.module.css";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

function DashboardPage() {
  return (
    <div className={styles.dashboardPage}>
      <NavBar />
    </div>
  );
}

export default DashboardPage;
