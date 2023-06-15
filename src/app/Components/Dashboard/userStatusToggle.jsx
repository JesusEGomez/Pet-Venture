import React, { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { useEffect } from "react";

function UserStatusToggle() {
  const [userStatus, setUserStatus] = useState(true);

  const handleUserStatusChange = () => {
    setUserStatus(!userStatus);
  };

  useEffect(() => {
    // firebase
    //   .firestore()
    //   .collection("yourCollection")
    //   .doc("yourDocumentId")
    //   .get()
    //   .then((documentSnapshot) => {
    //     if (documentSnapshot.exists) {
    //       // Update the field
    //       const fieldValue = documentSnapshot.data().fieldName;
    //       const updatedValue = "New Value";
    //       // Modify the field value as desired
    //       const modifiedFieldValue = fieldValue + " - " + updatedValue;
    //       // Save the changes
    //       documentSnapshot.ref
    //         .update({ fieldName: modifiedFieldValue })
    //         .then(() => {
    //           console.log("Field updated successfully!");
    //         })
    //         .catch((error) => {
    //           console.error("Error updating field:", error);
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error retrieving document:", error);
    //   });
  }, [userStatus]);

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={userStatus}
            onChange={handleUserStatusChange}
            name="userStatus"
          />
        }
        label={userStatus ? "Active" : "Inactive"}
      />
    </div>
  );
}
export default UserStatusToggle;

// Retrieve the document
