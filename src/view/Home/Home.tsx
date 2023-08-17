import { Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import Counter from "../../components/Counter";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">CounterH1</Typography>
      <Typography variant="h2">Custom H2</Typography>
      <Typography variant="h3">Custom H3</Typography>
      <Typography variant="h4">Custom H4</Typography>
      <Typography variant="h5">Custom H5</Typography>
      <Typography variant="h6">Custom H6</Typography>
      <Counter />
      <Stack spacing={1} direction="column" alignItems={"center"}>
        <Stack spacing={2} direction="row" alignItems={"center"}>
          <Typography variant="h2">Loader</Typography>
          <Spinner />
        </Stack>
        <Button component={Link} to="/stripe" variant="contained">
          Go To Stripe
        </Button>
        <Button component={Link} to="/ewdf3erdf" variant="contained">
          No Page Found
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
