import React, { useEffect, useState } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";

import Link from "next/link";

function UsersDash() {
  const [dataArray, setDataArray] = useState([]);

  // const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const getDbProducts = async () => {
      try {
        const response = (await axios.get("http://localhost:3000/api/users"))
          .data;

        setDataArray(response);
        console.log("response", response);
      } catch (error) {
        console.error(error);
      }
    };

    getDbProducts();
  }, []);

  const rows = dataArray.map((item) => ({
    id: item.id,
    col1: item.username,
    col2: item.displayName,
    col3: item.uid,
    col4: item.processCompleted,
    col5: item.profilePicture,
  }));

  const columns = [
    { field: "id", hide: true },
    { field: "col1", headerName: "Username", width: 150 },
    { field: "col2", headerName: "displayName", width: 150 },
    { field: "col3", headerName: "uid", width: 150 },
    { field: "col4", headerName: "processCompleted", width: 150 },
    { field: "col5", headerName: "profilePicture", width: 150 },
  ];

  console.log(dataArray);
  return (
    <div>
      <h2>Users</h2>

      <Link href="/formulario"> + hacer formulario para user</Link>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default UsersDash;
