import React from "react";
import { Box, useTheme, TextField } from "@mui/material";
import { tokens } from "../../../../theme";

const FirstNameField = ({ register, error }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <TextField
      sx={{
        "& .css-1m1f1hj-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
          color: `${colors.grey[300]}`,
        },
      }}
      fullWidth
        helperText={error ? error.message : null}
        error={!!error}
        label="First Name"
        variant="filled"
        {...register("firsName", {
          required: "Require",
          maxLength: {
            value: 32,
            message: "32 Characters Max",
          },
          minLength: {
            value: 4,
            message: "4 Characters Min",
          },
        })}
      />
    </Box>
  );
};

export default FirstNameField;
