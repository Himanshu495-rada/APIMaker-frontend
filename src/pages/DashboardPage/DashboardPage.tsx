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
            <button className={styles.edit_btn}>Edit</button>
          </div>
          <div>Total {2}</div>
          <div>
            <table className={styles.section_1_table}>
              <tr>
                <th>No.</th>
                <th>Collection Name</th>
                <th>Requests</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Todo</td>
                <td>
                  <table>
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
                <td>2</td>
                <td>User</td>
              </tr>
            </table>
          </div>
        </section>
        <section className={styles.section_2}>
          <div className={styles.section_header}>
            <h1>Database</h1>
            <button className={styles.configure_btn}>Configure</button>
          </div>
          <div>
            <table>
              <tr>
                <th>No.</th>
                <th>Database</th>
                <th>Link</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>1</td>
                <td>MongoDB</td>
                <td>mongodb://localhost:69...</td>
                <td>Connected</td>
              </tr>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
