import React, { useState } from "react";
import ToggleBtn from "../toggleBtn/ToggleBtn";
import styles from "./CollectionTable.module.css";
import { Table, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

interface CollectionData {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
}

interface CollectionProps {
  data: CollectionData[];
}

interface Collection {
  name: string;
  data: CollectionData[];
}

const CollectionTable: React.FC<CollectionProps> = ({ data }) => {
  const options = ["Data", "Endpoints"];

  const collections: Collection[] = [
    {
      name: "Users",
      data: [
        {
          id: 1,
          username: "john_doe",
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password123",
        },
        {
          id: 2,
          username: "jane_smith",
          name: "Jane Smith",
          email: "jane.smith@example.com",
          password: "qwerty456",
        },
      ],
    },
    {
      name: "Todos",
      data: [
        {
          id: 1,
          username: "",
          name: "Product A",
          email: "",
          password: "",
        },
        {
          id: 2,
          username: "",
          name: "Product B",
          email: "",
          password: "",
        },
      ],
    },
  ];
  const [selectedCollection, setSelectedCollection] = useState<string>(
    collections[0].name
  );

  const handleCollectionClick = (collectionName: string) => {
    setSelectedCollection(collectionName);
  };

  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Collection Name</th>
          <th className="d-flex justify-content-center">
            <ToggleBtn options={options} />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {collections.map((collection) => (
              <div
                key={collection.name}
                onClick={() => handleCollectionClick(collection.name)}
                className={styles.collectionSelect}
              >
                {collection.name}
              </div>
            ))}
          </td>
          <td>
            {selectedCollection && (
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {collections
                    .find(
                      (collection) => collection.name === selectedCollection
                    )
                    ?.data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CollectionTable;
