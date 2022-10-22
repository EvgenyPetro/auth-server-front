import { tokens } from "../../../../theme";
import { Box, TextField, useTheme } from "@mui/material";

const LastNameField = ({ register, error }) => {
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
        label="Last Name"
        variant="filled"
        {...register("lastName", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "32 Charecters Max",
          },
          minLength: {
            value: 4,
            message: "4 Charecters Min",
          },
        })}
        id="lastName"
      ></TextField>
    </Box>
  );
};

export default LastNameField;
