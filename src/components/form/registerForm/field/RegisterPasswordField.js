import { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  useTheme,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { tokens } from "../../../../theme";

const RegisterPasswordField = ({ register, error }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
        label="Password"
        type={showPassword ? "text" : "password"}
        variant="filled"
        id="password"
        {...register("password", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "32 Charecters Max",
          },
          minLength: {
            value: 8,
            message: "8 Charecters Min",
          },
        })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Box>
  );
};

export default RegisterPasswordField;
