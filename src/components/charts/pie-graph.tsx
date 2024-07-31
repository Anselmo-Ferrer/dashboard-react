'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

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
const chartData = [
  { browser: '18:00', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: '19:00', visitors: 200, fill: 'var(--color-safari)' },
  { browser: '20:00', visitors: 287, fill: 'var(--color-firefox)' },
  { browser: '21:00', visitors: 500, fill: 'var(--color-edge)' },
  { browser: '22:00', visitors: 190, fill: 'var(--color-other)' }
];

const chartConfig = {
  visitors: {
    label: 'Visitantes'
  },
  chrome: {
    label: '18:00',
    color: 'hsl(var(--chart-1))'
  },
  safari: {
    label: '19:00',
    color: 'hsl(var(--chart-2))'
  },
  firefox: {
    label: '20:00',
    color: 'hsl(var(--chart-3))'
  },
  edge: {
    label: '21:00',
    color: 'hsl(var(--chart-4))'
  },
  other: {
    label: '22:00',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export function PieGraph() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col rounded-xl">
      <CardHeader className="items-center pb-0">
        <CardTitle>Horarios mais visitados</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitas
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          as 21:00 tem mais clientes <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Veja o numero de visitantes em cada horario
        </div>
      </CardFooter>
    </Card>
  );
}
