'use client';

import { TrendingUp } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
const chartData = [
  { month: 'Janeiro', desktop: 186, mobile: 80 },
  { month: 'Fevereiro', desktop: 305, mobile: 200 },
  { month: 'Marco', desktop: 237, mobile: 120 },
  { month: 'Abril', desktop: 73, mobile: 190 },
  { month: 'Maio', desktop: 209, mobile: 130 },
  { month: 'Junho', desktop: 214, mobile: 140 }
];

const chartConfig = {
  desktop: {
    label: 'Faturamento',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: 'Gasto',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>Lucro</CardTitle>
        <CardDescription>
          Veja a comparacao de faturamento e gastos nos ultimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Aumento de 5.2% nesse mes <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Janeiro - Junho 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
