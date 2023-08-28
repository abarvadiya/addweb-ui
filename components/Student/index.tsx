import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EmptyDataMessage from "../common/EmptyData";
import { useEffect, useState } from "react";

const StudentList = () => {
  const [isLoading, setIsLoading] = useState(false);

  

  useEffect(() => {

  }, []);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Document name",
      width: 500,
    },
    {
      field: "coupling",
      headerName: "Coupling",
      width: 500,
    },
  ];
  return (
    <Box sx={{ height: 400 }}>
      <DataGrid
        getRowId={row => row.documentId}
        sx={{ width: "100%", cursor: "pointer" }}
        rows={[] || []}
        columns={columns}
        loading={isLoading}
        slots={{
          noRowsOverlay: () => (
            <EmptyDataMessage
              message="Start adding Document!"
              imageHeight="163px"
              imageWidth="163px"
              //   height="300px"
            />
          ),
        }}
      />
    </Box>
  );
};

export default StudentList;
