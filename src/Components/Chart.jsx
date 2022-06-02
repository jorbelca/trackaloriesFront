import React from "react"
import * as V from "victory"
import { VictoryLine, VictoryChart, VictoryTheme } from "victory"

const Chart = ({ data }) => {
  return (
    <div className="chart">
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          width={100}
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          data={data}
          y={"weight"}
          x={"date"}
        />
      </VictoryChart>
    </div>
  )
}

export default Chart
