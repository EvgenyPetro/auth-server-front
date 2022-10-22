import { Button } from "@mui/material";

export const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="secondary"
      {...props}
    >
      {children}
    </Button>
  );
};
