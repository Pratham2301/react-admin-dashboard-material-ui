import { mockBarData as data } from "../constants/mockData";
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../styles/theme";
import Logo from "./tempige.jpg"
function BarChart() {
    
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);

    return (
        // <ResponsiveBar
        //     data={data}
        //     theme={{
        //         // added
        //         axis: {
        //             domain: {
        //                 line: {
        //                     stroke: colors.grey[100],
        //                 },
        //             },
        //             legend: {
        //                 text: {
        //                     fill: colors.grey[100],
        //                 },
        //             },
        //             ticks: {
        //                 line: {
        //                     stroke: colors.grey[100],
        //                     strokeWidth: 1,
        //                 },
        //                 text: {
        //                     fill: colors.grey[100],
        //                 },
        //             },
        //         },
        //         legends: {
        //             text: {
        //                 fill: colors.grey[500],
        //             },
        //         },
        //     }}
        //     keys={["hot dog", "burger", "sandwich", "t1", "fries", "donut"]}
        //     keyss={["h", "b", "s", "k", "s", "t"]}
        //     indexBy="country"
        //     padding={0.3}
        //     colors={{ scheme: "nivo" }}
        //     valueScale={{ type: "linear" }}
        //     indexScale={{ type: "band", round: true }}
        //     margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        //     defs={[
        //         {
        //             id: "dots",
        //             type: "patternDots",
        //             background: "inherit",
        //             color: "#38bcb2",
        //             size: 4,
        //             padding: 1,
        //             stagger: true,
        //         },
        //         {
        //             id: "lines",
        //             type: "patternLines",
        //             background: "inherit",
        //             color: "#eed312",
        //             rotation: -45,
        //             lineWidth: 6,
        //             spacing: 10,
        //         },
        //     ]}
        //     borderColor={{
        //         from: "color",
        //         modifiers: [["darker", "1.6"]],
        //     }}
        //     axisTop={null}
        //     axisRight={null}
        //     axisBottom={{
        //         tickSize: 5,
        //         tickPadding: 5,
        //         tickRotation: 0,
        //         legend: isDashboard ? undefined : "parameters", // changed
        //         legendPosition: "middle",
        //         legendOffset: 32,
        //     }}
        //     axisLeft={{
        //         tickSize: 5,
        //         tickPadding: 5,
        //         tickRotation: 0,
        //         legend: isDashboard ? undefined : "food", // changed
        //         legendPosition: "middle",
        //         legendOffset: -40,
        //     }}
        //     enableLabel={false}
        //     labelSkipWidth={12}
        //     labelSkipHeight={12}
        //     labelTextColor={{
        //         from: "color",
        //         modifiers: [["darker", 1.6]],
        //     }}
        //     legends={[
        //         {
        //             dataFrom: "keyss",
        //             anchor: "bottom-right",
        //             direction: "column",
        //             justify: false,
        //             translateX: 120,
        //             translateY: 0,
        //             itemsSpacing: 2,
        //             itemWidth: 100,
        //             itemHeight: 20,
        //             itemDirection: "left-to-right",
        //             itemOpacity: 0.85,
        //             symbolSize: 20,
        //             effects: [
        //                 {
        //                     on: "hover",
        //                     style: {
        //                         itemOpacity: 1,
        //                     },
        //                 },
        //             ],
        //         },
        //     ]}
        //     role="application"
        //     barAriaLabel={function (e) {
        //         return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
        //     }}
        // />
        <img style={{height:'250px' , width:'300px'}} src={Logo} alt="" />
    );
};

export default BarChart;