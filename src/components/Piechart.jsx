import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

function PiechartComponent({ data }) {
  const bulletStyle = {
    display: "inline-block",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    marginRight: "8px",
  };

  const COLORS = ["#165816", "#1F7D1F", "#77DD77", "#28A228", "#32C732"];

  return (
    <React.Fragment>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          nameKey="label"
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              style={{ fontSize: "12px" }}
            />
          ))}
        </Pie>
      </PieChart>
      <ul>
        {data.map((entry, index) => (
          <li key={`label-${index}`} style={{ fontSize: "12px" }}>
            <span
              style={{
                ...bulletStyle,
                background: COLORS[index % COLORS.length],
              }}
            />
            {entry.label}
          </li>
        ))}
      </ul>
      {/* </ResponsiveContainer> */}
    </React.Fragment>
  );
}

export default PiechartComponent;
