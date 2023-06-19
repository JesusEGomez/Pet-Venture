import React, { useEffect, useState } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";

import { Switch } from "@nextui-org/react";
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

  const handleSwitchChange = (e, id) => {
    const updatedRows = dataArray.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          isActive: e.target.checked,
        };
      }
      return row;
    });

    setDataArray(updatedRows);
  };
  const rows = dataArray.map((item) => ({
    id: item.id,
    col1: item.username,
    col2: item.displayName,
    col3: item.uid,
    col4: item.processCompleted,
    col5: item.profilePicture,
  }));

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        const { id, edit } = params.row;

        return <Link href={`/user_detail/${id}`}>Edit</Link>;
      },
    },

    { field: "id", headerName: "ID", hide: true },
    {
      field: "col11",
      headerName: "isACTIVE",
      width: 150,
      renderCell: (params) => {
        const { id, col11 } = params.row;

        return (
          <Switch
            value={dataArray.isActive}
            checked={col11}
            onChange={(e) => handleSwitchChange(e, id)}
          />
        );
      },
    },
    { field: "col1", headerName: "USERNAME", width: 150 },
    { field: "col2", headerName: "FULL NAME", width: 150 },
    { field: "col3", headerName: "UID", width: 150 },
    { field: "col4", headerName: "PROCESS COMPLETED", width: 150 },
    { field: "col5", headerName: "PROFILE PICTURE", width: 150 },
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
