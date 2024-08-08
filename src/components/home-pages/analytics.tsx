

import { TabsContent } from "@radix-ui/react-tabs"
import { AreaGraph2 } from "../charts/area-graph-2"
import { LineGraph } from "../charts/line-graph"
import { BarGraph2 } from "../charts/bar-graph-2"
import RadialGraph from "../charts/radial-graph"

function AnalyticsPage() {
  return (
    <TabsContent value="analytics" className="space-y-4">
        <div className="w-full flex gap-5">
          <RadialGraph title="Janeiro" number='200' date="" subtitle="Aumento de 60% esse mês" desc=""/>
          <RadialGraph title="Fevereiro" number='140' date="" subtitle="Aumento de 60% esse mês" desc=""/>
          <RadialGraph title="Março" number='240' date="" subtitle="Aumento de 60% esse mês" desc=""/>
          <RadialGraph title="Abril" number='300' date="" subtitle="Aumento de 60% esse mês" desc=""/>
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