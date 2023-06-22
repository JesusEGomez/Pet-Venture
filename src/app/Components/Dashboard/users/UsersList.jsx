import React, { useEffect, useState } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import styles from "./usersList.module.css";
import { Switch } from "@nextui-org/react";
import Link from "next/link";
import { updateUser } from "@/app/Firebase/firebaseConfig";

function UsersDash() {
  const [dataArray, setDataArray] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getDbUsers = async () => {
      try {
        const response = (await axios.get("https://pet-venture-2-git-develop-jesusegomez.vercel.app/api/users"))
          .data;

        setDataArray(response);
        console.log("response", response);
      } catch (error) {
        console.error(error);
      }
    };

    getDbUsers();
  }, [trigger]);

  const handleSwitchChange = async (e, id) => {
    console.log("id", id);

    const foundRow = dataArray.find((p) => p.id === id);
    if (foundRow) {
      console.log("asd", foundRow);
      console.log(foundRow.isActive);
      await updateUser({ ...foundRow, isActive: !foundRow.isActive }, () => {
        setTrigger((u) => !u);
      });
    }
  };

  const rows = dataArray.map((item) => ({
    id: item.id,
    col1: item.username,
    col2: item.displayName,
    col3: item.uid,
    col4: item.processCompleted,
    col5: item.profilePicture,
    col11: item.isActive,
  }));

  const columns = [
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

      {/* <Link href="/formulario"> + hacer formulario para user</Link> */}
      <div className={styles.grid}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default UsersDash;
