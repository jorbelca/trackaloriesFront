import React from "react"
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from "victory"

const Chart = ({ data }) => {
  return (
    <div className="chart">
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          width={200}
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
          data={data}
          y="weight"
          x="date"
        />
        <VictoryAxis dependentAxis />
        <VictoryAxis
          style={{
            tickLabels: { angle: 45, transform: "translate(20, 12)" },
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default Chart
