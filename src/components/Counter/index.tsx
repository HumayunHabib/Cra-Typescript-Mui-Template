import React from "react";
import { Button, Stack, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store"; // Make sure to import RootState type from your Redux store
import { decrement, increment } from "../../redux/slice/counterSlice";
import { showToast } from "../../helpers/utils";

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(increment());
    showToast("Increment", "success");
  };
  const handleClickDecrement = () => {
    dispatch(decrement());
    showToast("Decrement", "error");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Typography variant="h3" color="primary" textAlign={"center"}>
        {counter}
      </Typography>
      <Stack spacing={2} direction="row">
        <Button
          onClick={handleClickIncrement}
          variant="contained"
          color="primary"
        >
          PrimaryBtn Increment
        </Button>
        <Button
          variant="outlined"
          onClick={handleClickDecrement}
          color="primary"
        >
          SecondaryBtn Decrement
        </Button>
      </Stack>
    </Box>
  );
};

export default Counter;
