import Header from "../../components/headers/Header";
import { Box } from "@mui/system";

const DashBoard = () => {
  return (
    <Box m="5px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="Welcom to hell" />
      </Box>
    </Box>
  );
};

export default DashBoard;
