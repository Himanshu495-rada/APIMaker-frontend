import React from "react";
import styles from "./DashboardPage.module.css";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

function DashboardPage() {
  return (
    <div className={styles.dashboardPage}>
      <NavBar />
      <div className={styles.dashboardPage_container}>
        <section className={styles.section_1}>
          <div className={styles.section_header}>
            <h1>Collections</h1>
            <NavLink to="/collections" className={styles.edit_btn}>
              Edit
            </NavLink>
          </div>
          <div>Total {2}</div>
          <div>
            <table className={styles.section_1_table}>
              <thead>
                <tr className={styles.section_1_table_row}>
                  <th>No.</th>
                  <th>Collection Name</th>
                  <th>Requests</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.section_1_table_row}>
                  <td className={styles.section_1_select_1}>1</td>
                  <td className={styles.section_1_select_2}>Todo</td>
                  <td rowSpan={2}>
                    <table className={styles.section_requests_table}>
                      <tr>
                        <th>Request Type</th>
                        <th>Path</th>
                        <th>Parameters</th>
                      </tr>
                      <tr>
                        <td>GET</td>
                        <td>/api/todo</td>
                      </tr>
                      <tr>
                        <td>POST</td>
                        <td>/api/todo</td>
                      </tr>
                      <tr>
                        <td>PUT</td>
                        <td>/api/todo</td>
                      </tr>
                      <tr>
                        <td>DELETE</td>
                        <td>/api/todo</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className={styles.section_1_select_1}>2</td>
                  <td className={styles.section_1_select_2}>User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className={styles.section_2}>
          <div className={styles.section_header}>
            <h1>Database</h1>
            <NavLink to="/database" className={styles.configure_btn}>
              Configure
            </NavLink>
          </div>
          <div>
            <table className={styles.section_2_table}>
              <thead>
                <tr className={styles.section_2_table_row}>
                  <th>No.</th>
                  <th>Database</th>
                  <th>Link</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.section_2_table_row}>
                  <td>1</td>
                  <td>MongoDB</td>
                  <td>mongodb://localhost:69...</td>
                  <td>Connected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
