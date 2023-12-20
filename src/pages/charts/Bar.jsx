import { BarChart, Header } from "../../components";
import { Box } from "@mui/material";


const Bar = () => {

  return (
    <Box m="20px">

      <Header title="Heat Map" subtitle="" />

      <Box height="75vh">
        <BarChart />
      </Box>

    </Box>
  );
};

export default Bar;