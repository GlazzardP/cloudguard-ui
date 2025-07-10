// import React, { useState } from "react";
// import AgCharts from "ag-charts-react";

// const FunnelChartHorizontal = () => {
//   const [options] = useState({
//     autoSize: true,
//     data: [
//       { stage: "Awareness", value: 1000 },
//       { stage: "Interest", value: 800 },
//       { stage: "Consideration", value: 600 },
//       { stage: "Intent", value: 400 },
//       { stage: "Purchase", value: 200 },
//     ],
//     series: [
//       {
//         type: "funnel",
//         xKey: "stage",
//         yKey: "value",
//         label: {
//           enabled: true,
//           formatter: ({ datum }) => `${datum.stage}: ${datum.value}`,
//           placement: "outside",
//         },
//         direction: "horizontal",
//       },
//     ],
//     legend: {
//       enabled: false,
//     },
//   });

//   return <AgCharts options={options} />;
// };

// export default FunnelChartHorizontal;
