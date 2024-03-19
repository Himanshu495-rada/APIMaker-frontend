import React from "react";
import styles from "./CollectionsPage.module.css";
import NavBar from "../../components/navbar/NavBar";
import CollectionTable from "../../components/collectionTable/CollectionTable";
import EditBtn from "../../components/editBtn/EditBtn";

interface CollectionData {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
}

const CollectionsPage: React.FC = () => {
  const collectionData: CollectionData[] = [
    {
      id: 1,
      username: "@admin",
      name: "Admin",
      email: "admin@gmail.com",
      password: "***********",
    },
    {
      id: 2,
      username: "@bahurocks",
      name: "Mahendra Bahubali",
      email: "bahu12@gmail.com",
      password: "************",
    },
  ];

  return (
    <div className={styles.page}>
      <NavBar />
      <div className="container-fluid mt-4">
        <div className="d-flex align-items-center flex-row">
          <h1 className={styles.title}>Collections</h1>
          <EditBtn />
        </div>
        <CollectionTable data={collectionData} />
      </div>
    </div>
  );
};

export default CollectionsPage;
