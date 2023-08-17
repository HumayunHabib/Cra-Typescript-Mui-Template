import React from "react";
import { Box } from "@mui/material";
import { BounceLoader } from "react-spinners";

const Spinner: React.FC = () => {
  //   const [loading, setLoading] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <BounceLoader
        color="#013EB7"
        loading={true}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default Spinner;
