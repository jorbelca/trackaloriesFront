import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const Chart = ({ data }) => {

  return (
    <div style={{ width: '90%', height: '170px' }}>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={170}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
