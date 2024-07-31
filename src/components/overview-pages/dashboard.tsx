import { TabsContent } from "@radix-ui/react-tabs"
import { BarGraph } from "../charts/bar-graph"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { RecentSales } from "./overview-ele/recent-sales"
import { PieGraph } from "../charts/pie-graph"
import { AreaGraph } from "../charts/area-graph"
import Dashboardcard from "./overview-ele/dashboardcard"

function OverviewPage() {
  return (
    <TabsContent value="overview" className="space-y-4">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Dashboardcard title='Faturamento' balance='R$ 23.413,34' desc='+20,1% em relação ao mês passado' />
      <Dashboardcard title='Lucro' balance='R$ 8.413,34' desc='+8,1% em relação ao mês passado' />
      <Dashboardcard title='Gastos' balance='$ 15.000,00' desc='-3,1% em relação ao mês passado' />
      <Dashboardcard title='Clientes' balance='2.423' desc='+4,3% em relação ao mês passado' />
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="col-span-4">
        <BarGraph />
      </div>
      <Card className="col-span-4 md:col-span-3">
        <CardHeader>
          <CardTitle>Vendas</CardTitle>
          <CardDescription>
            Você fez 265 vendas nesse mês.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentSales />
        </CardContent>
      </Card>
      <div className="col-span-4">
        <AreaGraph />
      </div>
      <div className="col-span-4 md:col-span-3">
        <PieGraph />
      </div>
    </div>
  </TabsContent>
  )
}

export default OverviewPage