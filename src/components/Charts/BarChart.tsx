import { FC } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

import { DataProps } from "../../../types/chartsTypes";

const BarChartE: FC<DataProps> = ({ dataPoints }) => {
  return (
    <div className="charts">

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataPoints}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="y" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartE;
