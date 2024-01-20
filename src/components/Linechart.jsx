import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

function LineChartComponent({ data }) {
  
  return (
    <React.Fragment>
      <div style={{ fontSize: "12px" }}>
        {/* <ResponsiveContainer width="100%" height="500"> */}
        <LineChart
          width={600}
          height={340}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid  stroke="#ccc" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#0074B7"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
    </React.Fragment>
  );
}

export default LineChartComponent;
