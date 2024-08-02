

import { TabsContent } from "@radix-ui/react-tabs"
import { RadialGraph } from "../charts/radial-graph"
import { AreaGraph2 } from "../charts/area-graph-2"
import { LineGraph } from "../charts/line-graph"
import { BarGraph2 } from "../charts/bar-graph-2"

function AnalyticsPage() {
  return (
    <TabsContent value="analytics" className="space-y-4">
        <div className="w-full flex gap-5">
          <RadialGraph/>
          <RadialGraph/>
          <RadialGraph/>
          <RadialGraph/>
        </div>
          <AreaGraph2 />
        <div className="w-full flex gap-5">
          <LineGraph />
          <BarGraph2 />
        </div>
    </TabsContent>
  )
}

export default AnalyticsPage