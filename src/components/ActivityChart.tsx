// ActivityChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Typography, Box, FormControl, Select, MenuItem } from "@mui/material";

const data = [
  { name: "5", uv: 7000 },
  { name: "9", uv: 3000 },
  { name: "11", uv: 4000 },
  { name: "13", uv: 5000 },
  { name: "15", uv: 4000 },
  { name: "17", uv: 6000 },
  { name: "19", uv: 8000 },
  { name: "21", uv: 14000 },
  { name: "23", uv: 9000 },
  { name: "25", uv: 7000 },
  { name: "27", uv: 6000 },
];

const ActivityChart: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "8px",
        backgroundColor: "rgb(55 55 72)",
        borderRadius: "8px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" color="white">
          Activity
        </Typography>
        <FormControl variant="outlined" size="small" sx={{ color: "white" }}>
          <Select
            value="Weekly"
            sx={{ color: "white", borderColor: "white" }}
            inputProps={{
              sx: {
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              },
            }}
          >
            <MenuItem value="Weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer width="100%" height={130}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "white" }} />
          <YAxis
            tick={{ fill: "white" }}
            ticks={[0, 5000, 10000, 15000]}
            tickFormatter={(tick) => `${tick / 1000}k`}
          />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ActivityChart;
